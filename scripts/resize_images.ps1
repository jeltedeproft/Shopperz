<#
.SYNOPSIS
  Downscale the recipe photos to the size the app actually displays them at.

.DESCRIPTION
  Cards show a 64px circle, the hero is 160-170px tall and the phone frame is
  430px wide. The imported photos were 556px wide originals, so most of every
  file was being downloaded and cached for nothing — which matters because the
  service worker keeps them for offline use.

  Uses System.Drawing from the .NET runtime, so there is nothing to install.
  Skips the app icons, and skips any file that is already small enough.

.EXAMPLE
  pwsh scripts/resize_images.ps1
  pwsh scripts/resize_images.ps1 -MaxWidth 640 -Quality 80
#>
[CmdletBinding()]
param(
  [int]$MaxWidth = 480,
  [int]$Quality = 72,
  [switch]$WhatIfOnly
)

Add-Type -AssemblyName System.Drawing

$imagesDir = Join-Path (Split-Path -Parent $PSScriptRoot) 'images'
if (-not (Test-Path $imagesDir)) { throw "No images directory at $imagesDir" }

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)

$files = Get-ChildItem -Path $imagesDir -Include *.jpg, *.jpeg, *.png -File -Recurse |
  Where-Object { $_.Name -notlike 'icon-*' }

$before = 0
$after = 0
$converted = 0
$skipped = 0

foreach ($file in $files) {
  $before += $file.Length

  $image = [System.Drawing.Image]::FromFile($file.FullName)
  try {
    if ($image.Width -le $MaxWidth -and $file.Extension -ne '.png') {
      $after += $file.Length
      $skipped++
      continue
    }

    $ratio = [Math]::Min(1.0, $MaxWidth / $image.Width)
    $newWidth = [int][Math]::Round($image.Width * $ratio)
    $newHeight = [int][Math]::Round($image.Height * $ratio)

    $bitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
    $graphics.Dispose()
  }
  finally {
    $image.Dispose()
  }

  # PNG photos become JPEG; the caller rewrites recipes.js for the new name.
  $targetPath = [IO.Path]::ChangeExtension($file.FullName, '.jpg')
  $tempPath = "$targetPath.tmp"

  if ($WhatIfOnly) {
    Write-Host ("would resize {0}: {1}px -> {2}px" -f $file.Name, $image.Width, $newWidth)
    $bitmap.Dispose()
    continue
  }

  $bitmap.Save($tempPath, $jpegCodec, $encoderParams)
  $bitmap.Dispose()

  if ($file.FullName -ne $targetPath) { Remove-Item $file.FullName -Force }
  Move-Item -Path $tempPath -Destination $targetPath -Force

  $newSize = (Get-Item $targetPath).Length
  $after += $newSize
  $converted++
  Write-Host ("{0,-34} {1,6:N0} KB -> {2,6:N0} KB" -f $file.Name, ($file.Length / 1KB), ($newSize / 1KB))
}

Write-Host ''
Write-Host ("resized {0}, skipped {1}" -f $converted, $skipped)
Write-Host ("total {0:N1} MB -> {1:N1} MB" -f ($before / 1MB), ($after / 1MB))

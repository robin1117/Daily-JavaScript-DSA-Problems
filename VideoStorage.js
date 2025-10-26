/*
-------------------------------------------------
📝 Problem: Video Storage
-------------------------------------------------
Video Storage
Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
If not given one of the video units above, return "Invalid video unit".
The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
If not given one of the hard drive units above, return "Invalid drive unit".
Return the number of whole videos the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB
For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-----*/

function gbUnits(value, unit) {
  switch (unit.toUpperCase()) {
    case 'B': return value / 1000 / 1000 / 1000
    case 'KB': return value / 1000 / 1000
    case 'MB': return value / 1000
    case 'GB': return value
    case 'TB': return value * 1000
  }
}

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const validVideoUnits = ['B', 'KB', 'MB', 'GB']
  const validDriveUnits = ['GB', 'TB']

  if (!validVideoUnits.includes(videoUnit.toUpperCase())) {
    return "Invalid video unit"
  }

  if (!validDriveUnits.includes(driveUnit.toUpperCase())) {
    return "Invalid drive unit"
  }



  return parseInt(gbUnits(driveSize, driveUnit) / gbUnits(videoSize, videoUnit))

}

numberOfVideos(1.5, "GB", 2.2, "TB")
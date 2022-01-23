-- CreateTable
CREATE TABLE "Client" (
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "trainerName" TEXT NOT NULL,
    "livesIn" TEXT NOT NULL DEFAULT 'Apartment',
    "numberOfGuardians" INTEGER NOT NULL DEFAULT 2,
    "hasAHallway" BOOLEAN NOT NULL DEFAULT true,
    "hasAnElevator" BOOLEAN NOT NULL DEFAULT false,
    "hasAnOuterDoor" BOOLEAN NOT NULL DEFAULT true,
    "hasACar" BOOLEAN NOT NULL DEFAULT false,
    "exitDoorName" TEXT NOT NULL DEFAULT 'front',
    "preferredTimeOfDay" TEXT NOT NULL DEFAULT 'noon',
    "pdqsJSON" TEXT NOT NULL DEFAULT '[''keys'', ''bag'', ''shoes'', ''coat'']'
);

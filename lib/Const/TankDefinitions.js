"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTankByName = exports.getTankById = exports.TankCount = exports.visibilityRateDamage = void 0;
const DevTankDefinitions_1 = require("./DevTankDefinitions");
exports.visibilityRateDamage = 0.2;
const TankDefinitions = JSON.parse(`[
    {
        "id": 0,
        "name": "Tank",
        "upgradeMessage": "",
        "levelRequirement": 0,
        "upgrades": [
            1,
            2,
            3,
            4,
            6,
            5,
            7,
            8
        ],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "null",
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 1,
        "name": "Twin",
        "upgradeMessage": "",
        "levelRequirement": 15,
        "upgrades": [9, 10, 11, 17, 28],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -26,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.75,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.9,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 26,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 0.75,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.9,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    
    {
        "id": 2,
        "name": "Sniper",
        "upgradeMessage": "",
        "levelRequirement": 15,
        "upgrades": [12, 13, 14],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 42,
                "delay": 0,
                "reload": 1.5,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 3,
        "name": "Machine Gun",
        "upgradeMessage": "",
        "levelRequirement": 15,
        "upgrades": [16,52, 17],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 0.5,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.7,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 4,
        "name": "Flank Guard",
        "upgradeMessage": "",
        "levelRequirement": 15,
        "upgrades": [18, 10, 11, 19, 20, 29, 21,109],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
  
    {
        "id": 5,
        "name": "Commander",
        "upgradeMessage": "Use your left mouse button to control the drones",
        "levelRequirement": 15,
        "upgrades": [26, 24, 27, 28, 32 ],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0,
                "reload": 3.5,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 3,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 6,
        "name": "Single",
        "upgradeMessage": "",
        "levelRequirement": 15,
        "upgrades": [22, 23 ,19, 25,102,30, 24],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 65,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.2,
                    "damage": 1.8,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.4
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 7,
        "name": "Trapper",
        "upgradeMessage": "",
        "levelRequirement": 15,
        "upgrades": [29, 30, 20, 36, 31],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 2.25,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 8,
        "name": "Smasher",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [86, 87,88,89,90, 108],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 0.9,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "smasher",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 10
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 10
            },
            {
                "name": "Max Health",
                "max": 10
            },
            {
                "name": "Health Regen",
                "max": 10
            }
        ]
    },
    {
        "id": 9,
        "name": "Triple Shot",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [33,34,35, 58],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": -0.39269908169872414,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.39269908169872414,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 10,
        "name": "Quad Tank",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [37, 38, 39],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -1.5707963267948966,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 11,
        "name": "Twin Flank",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [40, 35, 42, 41],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -26,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 26,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": -26,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 26,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 12,
        "name": "Assassin",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [43,44,46,45,15,61,95],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.8,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 120,
                "width": 42,
                "delay": 0,
                "reload": 2,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 13,
        "name": "Hunter",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [47, 48],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.85,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 42,
                "delay": 0,
                "reload": 2.5,
                "recoil": 0.3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 56.7,
                "delay": 0.2,
                "reload": 2.5,
                "recoil": 0.3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 14,
        "name": "Scope",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [45,49,50],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 37,
                "delay": 0,
                "reload": 1.5,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 27,
                "delay": 0.2,
                "reload": 1.5,
                "recoil": 0.4,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.2,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 72.5,
                "width": 27,
                "delay": 0.4,
                "reload": 1.5,
                "recoil": 0.4,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.2,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 65,
                "width": 27,
                "delay": 0.6,
                "reload": 1.5,
                "recoil": 0.4,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.2,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 15,
        "name": "Peace Keeper",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.8,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 42,
                "delay": 0,
                "reload": 1.5,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 90,
                "width": 42,
                "delay": 1,
                "reload": 1,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 0.5,
                "recoil": 1.5,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 16,
        "name": "Spewer",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [96, 49,98, 104],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 52.5,
                "delay": 0,
                "reload": 0.35,
                "recoil": 0.9,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.8,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 17,
        "name": "Gunner",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [53, 49,50, 96, 54, 62],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -32,
                "size": 65,
                "width": 25.2,
                "delay": 0.5,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 32,
                "size": 65,
                "width": 25.2,
                "delay": 0.75,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": -17,
                "size": 85,
                "width": 25.2,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 17,
                "size": 85,
                "width": 25.2,
                "delay": 0.25,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 18,
        "name": "Tri-Angle",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [55,56,57,42],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.665191429188092,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 2.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.6179938779914944,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 2.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 19,
        "name": "Triple Tank",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [35, 38, 59 , 60 , 80, 81],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            },
            {
                "angle": -2.0943951023931953,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 20,
        "name": "Trap Guard",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [54,57,61,98,85],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Penetration",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 21,
        "name": "Auto 3",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [39, 60, 76, 99, 111],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "auto3",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 22,
        "name": "Destroyer",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [64, 59 ,68,103, 65, 75, 94],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 71.4,
                "delay": 0,
                "reload": 4,
                "recoil": 15,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 3,
                    "speed": 0.7,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 23,
        "name": "Artillery",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [66,67, 48],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0.17453292519943295,
                "offset": 20,
                "size": 80,
                "width": 25.2,
                "delay": 0.6666,
                "reload": 2.5,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.17453292519943295,
                "offset": -20,
                "size": 80,
                "width": 25.2,
                "delay": 0.5,
                "reload": 2.5,
                "recoil": 0.3333,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 65,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.2,
                    "damage": 1.8,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.4
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 24,
        "name": "Director",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [75,94],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 75,
                "width": 63,
                "delay": 0,
                "reload": 8,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 3,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 3,
                    "damage": 1.15,
                    "speed": 0.675,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 0.6
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 25,
        "name": "Launcher",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [68,69,70],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": "launcher",
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 65.625,
                "delay": 0,
                "reload": 4,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "launrocket",
                    "sizeRatio": 0.8,
                    "health": 3,
                    "damage": 1,
                    "speed": 0.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Rocket Damage",
                "max": 7
            },
            {
                "name": "Rocket Penetration",
                "max": 7
            },
            {
                "name": "Rocket Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 26,
        "name": "Overseer",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [71,72,73, 85, 74,101],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": -1.5707963267948966,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.25,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 4,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.25,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 4,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 27,
        "name": "Spawner",
        "upgradeMessage": "Use your left mouse button to control the minions around your cursor",
        "levelRequirement": 30,
        "upgrades": [79, 80, 94],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 100,
                "width": 42,
                "delay": 0,
                "reload": 5,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 4,
                "canControlDrones": true,
                "bullet": {
                    "type": "minion",
                    "sizeRatio": 1,
                    "health": 2.5,
                    "damage": 0.7,
                    "speed": 0.56,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Minion Damage",
                "max": 7
            },
            {
                "name": "Minion Health",
                "max": 7
            },
            {
                "name": "Minion Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 28,
        "name": "Cruiser",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [41, 78, 67],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 20,
                "size": 75,
                "width": 29.4,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": -20,
                "size": 75,
                "width": 29.4,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Swarm Damage",
                "max": 7
            },
            {
                "name": "Swarm Amount",
                "max": 7
            },
            {
                "name": "Swarm Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 29,
        "name": "Flank Trapper",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [81 , 82, 99],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 0,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 30,
        "name": "Big Trapper",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [83, 84, 63],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 54.6,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 1,
                    "health": 2.5,
                    "damage": 1.3,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 6,
                    "absorbtionFactor": 0.6
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 31,
        "name": "Boomer",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [95],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "pronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "drone2",
                    "sizeRatio": 0.8,
                    "health": 1.5,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 32,
        "name": "Sepulcher",
        "upgradeMessage": "Kill squares to possess them",
        "levelRequirement": 30,
        "upgrades": [72, 77,101, 100],
        "flags": {
            "invisibility": false,
            "canClaimSquares": true,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 4,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.25,
                "reload": 10,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                "bullet": {
                    "type": "necrodrone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.42,
                    "speed": 0.72,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Drone Count",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 33,
        "name": "Triplet",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -26,
                "size": 80,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.7,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 26,
                "size": 80,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.7,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.7,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 34,
        "name": "Penta Shot",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": -0.7853981633974483,
                "offset": 0,
                "size": 75,
                "width": 42,
                "delay": 0.66,
                "reload": 1,
                "recoil": 0.7,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.55,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.7853981633974483,
                "offset": 0,
                "size": 75,
                "width": 42,
                "delay": 0.66,
                "reload": 1,
                "recoil": 0.7,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.55,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.39269908169872414,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.33,
                "reload": 1,
                "recoil": 0.7,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.55,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.39269908169872414,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.33,
                "reload": 1,
                "recoil": 0.7,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.55,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.7,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.55,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 35,
        "name": "Triple Flank",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": -0.39269908169872414,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.39269908169872414,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -2.748893571891069,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.748893571891069,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 36,
        "name": "Engineer",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [84, 98],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "engitrapLauncher",
                "bullet": {
                    "type": "autotrap",
                    "sizeRatio": 0.8,
                    "health": 1.5,
                    "damage": 0.8,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 3,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 37,
        "name": "Octo Tank",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": -0.7853981633974483,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.7853981633974483,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -2.356194490192345,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.356194490192345,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -1.5707963267948966,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 38,
        "name": "Hex Tank",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            },
            {
                "angle": -1.0471975511965976,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            },
            {
                "angle": 1.0471975511965976,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            },
            {
                "angle": -2.0943951023931953,
                "offset": 0,
                "size": 95,
                "width": 56,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.1,
                    "damage": 1.5,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.75
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },    
    {
        "id": 39,
        "name": "Auto 5",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "auto5",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 40,
        "name": "Triple Twin",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -26,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 26,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": -26,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": 26,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -2.0943951023931953,
                "offset": -26,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -2.0943951023931953,
                "offset": 26,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 41,
        "name": "Battleship",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 1.5707963267948966,
                "offset": -20,
                "size": 75,
                "width": 29.4,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": false,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 4.71238898038469,
                "offset": -20,
                "size": 75,
                "width": 29.4,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": false,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 20,
                "size": 75,
                "width": 29.4,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 4.71238898038469,
                "offset": 20,
                "size": 75,
                "width": 29.4,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 42,
        "name": "Hewn Flank",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 2.356194490192345,
                "offset": 0.13,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.8,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -2.356194490192345,
                "offset": -0.13,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 0.8,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": -26,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 26,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": -26,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 26,
                "size": 95,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 43,
        "name": "Ranger",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.7,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "pronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 120,
                "width": 42,
                "delay": 0,
                "reload": 2,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.75,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 44,
        "name": "Marksman",
        "upgradeMessage": "Use your right mouse button to look further in the direction you're facing",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": true,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.85,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 140,
                "width": 42,
                "delay": 0,
                "reload": 4,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.5,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0,
                    "lifeLength": 1.25,
                    "absorbtionFactor": 0.25
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 45,
        "name": "Rifle",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.8,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 120,
                "width": 37,
                "delay": 0,
                "reload": 2,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 90,
                "width": 27,
                "delay": 0.2,
                "reload": 2,
                "recoil": 0.4,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.35,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 82.5,
                "width": 27,
                "delay": 0.4,
                "reload": 2,
                "recoil": 0.4,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.35,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 75,
                "width": 27,
                "delay": 0.6,
                "reload": 2,
                "recoil": 0.4,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.35,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 46,
        "name": "Stalker",
        "upgradeMessage": "Stand still to go invisible",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": true,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.8,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 120,
                "width": 42,
                "delay": 0,
                "reload": 2,
                "recoil": 3,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 47,
        "name": "Predator",
        "upgradeMessage": "Use your right mouse button to look further in the direction you're facing",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": true,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.85,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 0.3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 56.7,
                "delay": 0.2,
                "reload": 3,
                "recoil": 0.3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 71.39999999999999,
                "delay": 0.4,
                "reload": 3,
                "recoil": 0.3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 48,
        "name": "Ordinance",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0.17453292519943295,
                "offset": 20,
                "size": 80,
                "width": 25.2,
                "delay": 0.6666,
                "reload": 2.5,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.17453292519943295,
                "offset": -20,
                "size": 80,
                "width": 25.2,
                "delay": 0.3333,
                "reload": 2.5,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 56.7,
                "delay": 0,
                "reload": 2.5,
                "recoil": 0.3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.75,
                    "speed": 1.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 65,
                "delay": 0.2,
                "reload": 2.5,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1.2,
                    "damage": 1.8,
                    "speed": 0.85,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.4
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 49,
        "name": "Streamliner",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.85,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1.1,
                    "scatterRate": 0.3,
                    "lifeLength": 0.8,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 100,
                "width": 42,
                "delay": 0.2,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1.1,
                    "scatterRate": 0.3,
                    "lifeLength": 0.8,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 90,
                "width": 42,
                "delay": 0.4,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1.1,
                    "scatterRate": 0.3,
                    "lifeLength": 0.8,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.6,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1.1,
                    "scatterRate": 0.3,
                    "lifeLength": 0.8,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.8,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1.1,
                    "scatterRate": 0.3,
                    "lifeLength": 0.8,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 50,
        "name": "Rim Fire",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 37,
                "delay": 0,
                "reload": 4,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": -32,
                "size": 65,
                "width": 25.2,
                "delay": 0.5,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 32,
                "size": 65,
                "width": 25.2,
                "delay": 0.75,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": -17,
                "size": 85,
                "width": 25.2,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 17,
                "size": 85,
                "width": 25.2,
                "delay": 0.25,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 51,
        "name": "Warden",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.8,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "pronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 42,
                "delay": 0,
                "reload": 1.5,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 0.45,
                "recoil": 1.5,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.7,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 52,
        "name": "Sprayer",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [97, 15],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 42,
                "delay": 1,
                "reload": 1,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 0.5,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.7,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 53,
        "name": "Minigun",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -25,
                "size": 65,
                "width": 18,
                "delay": 0.66,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.35,
                    "speed": 1.2,
                    "scatterRate": 0.5,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 25,
                "size": 65,
                "width": 18,
                "delay": 0.66,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.35,
                    "speed": 1.2,
                    "scatterRate": 0.5,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": -17.5,
                "size": 85,
                "width": 18,
                "delay": 0.33,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.35,
                    "speed": 1.2,
                    "scatterRate": 0.5,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 17.5,
                "size": 85,
                "width": 18,
                "delay": 0.33,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.35,
                    "speed": 1.2,
                    "scatterRate": 0.5,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": -10,
                "size": 95,
                "width": 18,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.35,
                    "speed": 1.2,
                    "scatterRate": 0.5,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 10,
                "size": 95,
                "width": 18,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.35,
                    "speed": 1.2,
                    "scatterRate": 0.5,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 54,
        "name": "Gunner Trapper",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -16,
                "size": 75,
                "width": 21,
                "delay": 0.66,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 16,
                "size": 75,
                "width": 21,
                "delay": 0.33,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.5,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 60,
                "width": 54.6,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Penetration",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 55,
        "name": "Booster",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.9269908169872414,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.66,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.356194490192345,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.66,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.665191429188092,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.33,
                "reload": 1,
                "recoil": 2.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.6179938779914944,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.33,
                "reload": 1,
                "recoil": 2.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 56,
        "name": "Fighter",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 1.5,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.8,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -1.5707963267948966,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 1.5,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.8,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.665191429188092,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 2.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.6179938779914944,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 2.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 57,
        "name": "Wake",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 6,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.25,
                    "scatterRate": 0.5,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.443460952792061,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 2.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -2.443460952792061,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0.5,
                "reload": 1,
                "recoil": 2.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.2,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Penetration",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 58,
        "name": "Spread Shot",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 1.3089969389957472,
                "offset": 0,
                "size": 65,
                "width": 29.4,
                "delay": 0.833325,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -1.3089969389957472,
                "offset": 0,
                "size": 65,
                "width": 29.4,
                "delay": 0.833325,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.0471975511965976,
                "offset": 0,
                "size": 71,
                "width": 29.4,
                "delay": 0.666675,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -1.0471975511965976,
                "offset": 0,
                "size": 71,
                "width": 29.4,
                "delay": 0.666675,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.7853981633974483,
                "offset": 0,
                "size": 77,
                "width": 29.4,
                "delay": 0.5,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.7853981633974483,
                "offset": 0,
                "size": 77,
                "width": 29.4,
                "delay": 0.5,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.5235987755982988,
                "offset": 0,
                "size": 83,
                "width": 29.4,
                "delay": 0.333325,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.5235987755982988,
                "offset": 0,
                "size": 83,
                "width": 29.4,
                "delay": 0.333325,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.2617993877991494,
                "offset": 0,
                "size": 89,
                "width": 29.4,
                "delay": 0.166675,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.2617993877991494,
                "offset": 0,
                "size": 89,
                "width": 29.4,
                "delay": 0.166675,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.6,
                    "speed": 1,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 2,
                "recoil": 0.1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 59,
        "name": "Triple Destroyer",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [
        ],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 71.39999999999999,
                "delay": 0,
                "reload": 4,
                "recoil": 15,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.5,
                    "damage": 2.5,
                    "speed": 0.7,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": 0,
                "size": 95,
                "width": 71.39999999999999,
                "delay": 0,
                "reload": 4,
                "recoil": 15,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.5,
                    "damage": 2.5,
                    "speed": 0.7,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            },
            {
                "angle": -2.0943951023931953,
                "offset": 0,
                "size": 95,
                "width": 71.39999999999999,
                "delay": 0,
                "reload": 4,
                "recoil": 15,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.5,
                    "damage": 2.5,
                    "speed": 0.7,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 60,
        "name": "Mega 3",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "mega3",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 61,
        "name": "Bushwaker",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.8,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 119,
                "width": 42,
                "delay": 0,
                "reload": 2,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1.5,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Penetration",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 62,
        "name": "Auto Gunner",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "autoturret",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -32,
                "size": 65,
                "width": 25.2,
                "delay": 0.5,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 32,
                "size": 65,
                "width": 25.2,
                "delay": 0.75,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": -17,
                "size": 85,
                "width": 25.2,
                "delay": 0,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 17,
                "size": 85,
                "width": 25.2,
                "delay": 0.25,
                "reload": 1,
                "recoil": 0.2,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.45,
                    "damage": 0.5,
                    "speed": 1.1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 63,
        "name": "Auto Trapper",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "autoturret",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 54.6,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 1,
                    "health": 2.5,
                    "damage": 1.3,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 6,
                    "absorbtionFactor": 0.6
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 64,
        "name": "Annihilator",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 96.6,
                "delay": 0,
                "reload": 6,
                "recoil": 17,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 4,
                    "damage": 3,
                    "speed": 0.7,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.05
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 65,
        "name": "Hybrid",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 71.4,
                "delay": 0,
                "reload": 4,
                "recoil": 15,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 3,
                    "speed": 0.7,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 2,
                "canControlDrones": false,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 1.4,
                    "damage": 0.7,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Penetration",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 66,
        "name": "Mortar",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0.17453292519943295,
                "offset": 25,
                "size": 70,
                "width": 25.2,
                "delay": 0.6,
                "reload": 2.5,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.17453292519943295,
                "offset": -25,
                "size": 70,
                "width": 25.2,
                "delay": 0.8,
                "reload": 2.5,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.1308996938995747,
                "offset": 20,
                "size": 80,
                "width": 25.2,
                "delay": 0.2,
                "reload": 2.5,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.1308996938995747,
                "offset": -20,
                "size": 80,
                "width": 25.2,
                "delay": 0.4,
                "reload": 2.5,
                "recoil": 0.5,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 0.8,
                    "damage": 0.65,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 65,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.2,
                    "damage": 1.8,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.4
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 67,
        "name": "Beekeeper",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0.26179938779,
                "offset": 10,
                "size": 75,
                "width": 29.4,
                "delay": 0.3333,
                "reload": 2.5,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": false,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1,
                    "sides": 4
                }
            },
            {
                "angle": -0.26179938779,
                "offset": -10,
                "size": 75,
                "width": 29.4,
                "delay": 0.6666,
                "reload": 2.5,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": false,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 0.5,
                    "absorbtionFactor": 1,
                    "sides": 4
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 65,
                "delay": 0,
                "reload": 2.5,
                "recoil": 6,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1.2,
                    "damage": 1.8,
                    "speed": 0.85,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.4
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Penetration",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 68,
        "name": "Skimmer",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": "launcher",
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 71.4,
                "delay": 0,
                "reload": 4,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "skimmer",
                    "sizeRatio": 1,
                    "health": 3,
                    "damage": 1,
                    "speed": 0.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1.3,
                    "absorbtionFactor": 0.1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Rocket Damage",
                "max": 7
            },
            {
                "name": "Rocket Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Rocket Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 69,
        "name": "Rocketeer",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": "launcher",
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 52.5,
                "delay": 0,
                "reload": 4,
                "recoil": 3,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "bullet": {
                    "type": "rocket",
                    "sizeRatio": 1,
                    "health": 5,
                    "damage": 1,
                    "speed": 0.3,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Rocket Damage",
                "max": 7
            },
            {
                "name": "Rocket Penetration",
                "max": 7
            },
            {
                "name": "Rocket Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 70,
        "name": "Auto Launcher",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": "launcher",
        "postAddon": "autoturret",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 65.625,
                "delay": 0,
                "reload": 4,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "launrocket",
                    "sizeRatio": 0.8,
                    "health": 3,
                    "damage": 1,
                    "speed": 0.4,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Rocket Damage",
                "max": 7
            },
            {
                "name": "Rocket Penetration",
                "max": 7
            },
            {
                "name": "Rocket Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 71,
        "name": "Overlord",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": -1.5707963267948966,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.5,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 2,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 1,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.5,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 2,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 1,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.5,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 2,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 1,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.5,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 2,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 1,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 72,
        "name": "Necromancer",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "canClaimSquares": true,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 4,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": -1.5707963267948966,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.5,
                "reload": 10,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                 
                "bullet": {
                    "type": "necrodrone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.42,
                    "speed": 0.72,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.5,
                "reload": 10,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                "bullet": {
                    "type": "necrodrone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.42,
                    "speed": 0.72,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Drone Count",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 73,
        "name": "Auto Overseer",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "autoturret",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": -1.5707963267948966,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.25,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 4,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.25,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 4,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 74,
        "name": "Manager",
        "upgradeMessage": "Stand still to go invisible",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": true,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 8,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 1,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 75,
        "name": "Executive",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 73.5,
                "delay": 0,
                "reload": 12,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 3,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 4.5,
                    "damage": 1.4,
                    "speed": 0.55,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 0.4
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 76,
        "name": "Spectre",
        "upgradeMessage": "Stand still to go invisible",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": true,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0,
        "visibilityRateMoving": 0.125,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "stalker3",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 77,
        "name": "Maleficitor",
        "upgradeMessage": "Stand still to go invisible",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": true,
            "zoomAbility": false,
            "canClaimSquares": true,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 4,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 51,
                "delay": 0.25,
                "reload": 10,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                "bullet": {
                    "type": "necrodrone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.42,
                    "speed": 0.82,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Drone Count",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 78,
        "name": "Carrier",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 75,
                "width": 29.4,
                "delay": 0,
                "reload": 1,
                "recoil": 0.7,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.7853981633974483,
                "offset": 0,
                "size": 75,
                "width": 29.4,
                "delay": 0,
                "reload": 1,
                "recoil": 0.7,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.7853981633974483,
                "offset": 0,
                "size": 75,
                "width": 29.4,
                "delay": 0,
                "reload": 1,
                "recoil": 0.7,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Swarm Damage",
                "max": 7
            },
            {
                "name": "Swarm Amount",
                "max": 7
            },
            {
                "name": "Swarm Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 79,
        "name": "Factory",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 100,
                "width": 52.5,
                "delay": 0,
                "reload": 5,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 6,
                "canControlDrones": true,
                "bullet": {
                    "type": "minion",
                    "sizeRatio": 0.8,
                    "health": 2.5,
                    "damage": 0.7,
                    "speed": 0.56,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Minion Damage",
                "max": 7
            },
            {
                "name": "Minion Health",
                "max": 7
            },
            {
                "name": "Minion Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 80,
        "name": "Master",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 38,
                "delay": 0,
                "reload": 5,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 3,
                "canControlDrones": false,
                "bullet": {
                    "type": "miniminion",
                    "sizeRatio": 1,
                    "health": 1.5,
                    "damage": 1,
                    "speed": 0.7,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": 0,
                "size": 80,
                "width": 38,
                "delay": 0,
                "reload": 5,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 3,
                "canControlDrones": false,
                "bullet": {
                    "type": "miniminion",
                    "sizeRatio": 1,
                    "health": 1.5,
                    "damage": 1,
                    "speed": 0.7,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -2.0943951023931953,
                "offset": 0,
                "size": 80,
                "width": 38,
                "delay": 0,
                "reload": 5,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 3,
                "canControlDrones": false,
                "bullet": {
                    "type": "miniminion",
                    "sizeRatio": 1,
                    "health": 1.5,
                    "damage": 1,
                    "speed": 0.7,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Minion Damage",
                "max": 7
            },
            {
                "name": "Minion Health",
                "max": 7
            },
            {
                "name": "Minion Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 81,
        "name": "Tri-Trapper",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 4.1887902047863905,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
            "id": 82,
        "name": "Barricade",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0.75,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 0.75,
                    "damage": 1.25,
                    "speed": 2.5,
                    "scatterRate": 1,
                    "lifeLength": 1.5,
                    "absorbtionFactor": 0.5
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0.5,
                "reload": 1.5,
                "recoil": 0.75,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 0.75,
                    "damage": 1.25,
                    "speed": 2.5,
                    "scatterRate": 0,
                    "lifeLength": 1.5,
                    "absorbtionFactor": 0.5
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 83,
        "name": "Mega Trapper",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 69.888,
                "delay": 0,
                "reload": 4,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 1,
                    "health": 4,
                    "damage": 2.5,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 5,
                    "absorbtionFactor": 0.3
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    }, 
    {
        "id": 84,
        "name": "Raider",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 54.6,
                "delay": 0,
                "reload": 5,
                "recoil": 1,
                "megaturret": true,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "engitrapLauncher",
                "bullet": {
                    "type": "autotrap",
                    "sizeRatio": 1,
                    "health": 2.5,
                    "damage": 1.3,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 3,
                    "absorbtionFactor": 0.6
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 85,
        "name": "Overtrapper",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 2.25,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 2,
                    "damage": 1,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 8,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.375,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 2,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 1.4,
                    "damage": 0.7,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 4.1887902047863905,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0.375,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 2,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 1.4,
                    "damage": 0.7,
                    "speed": 1,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Health",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 86,
        "name": "Spike",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 0.9,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "spike",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 10
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 10
            },
            {
                "name": "Max Health",
                "max": 10
            },
            {
                "name": "Health Regen",
                "max": 10
            }
        ]
    },
    {
        "id": 87,
        "name": "Mega Smasher",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 0.25,
        "speed": 0.95,
        "maxHealth": 75,
        "preAddon": null,
        "postAddon": "megasmasher",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 10
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 10
            },
            {
                "name": "Max Health",
                "max": 10
            },
            {
                "name": "Health Regen",
                "max": 10
            }
        ]
    },
    {
        "id": 88,
        "name": "Saw",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.85,
        "absorbtionFactor": 0.8,
        "speed": 1.2,
        "maxHealth": 40,
        "preAddon": null,
        "postAddon": "saw",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 10
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 10
            },
            {
                "name": "Max Health",
                "max": 10
            },
            {
                "name": "Health Regen",
                "max": 10
            }
        ]
    },
    {
        "id": 89,
        "name": "Landmine",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": true,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0,
        "visibilityRateMoving": 0.16,
        "invisibilityRate": 0.003,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "landmine",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 10
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 10
            },
            {
                "name": "Max Health",
                "max": 10
            },
            {
                "name": "Health Regen",
                "max": 10
            }
        ]
    },
    {
        "id": 90,
        "name": "Auto Smasher",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1.1,
        "maxHealth": 55,
        "preAddon": null,
        "postAddon": "autosmasher",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 10
            },
            {
                "name": "Reload",
                "max": 10
            },
            {
                "name": "Bullet Damage",
                "max": 10
            },
            {
                "name": "Bullet Penetration",
                "max": 10
            },
            {
                "name": "Bullet Speed",
                "max": 10
            },
            {
                "name": "Body Damage",
                "max": 10
            },
            {
                "name": "Max Health",
                "max": 10
            },
            {
                "name": "Health Regen",
                "max": 10
            }
        ]
    },
    {
        "id": 91,
        "name": "Dominator",
        "upgradeMessage": "",
        "levelRequirement": 0,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 6000,
        "preAddon": "dombase",
        "postAddon": "dompronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 34.99965,
                "delay": 0.001,
                "reload": 3,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 100,
                    "damage": 10,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 0
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 0
            },
            {
                "name": "Max Health",
                "max": 0
            },
            {
                "name": "Health Regen",
                "max": 0
            }
        ]
    },
    {
        "id": 92,
        "name": "Dominator",
        "upgradeMessage": "",
        "levelRequirement": 0,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 6000,
        "preAddon": "dombase",
        "postAddon": "dompronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": -6,
                "size": 75,
                "width": 17.50035,
                "delay": 0.666,
                "reload": 0.3,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.6,
                    "health": 5,
                    "damage": 1,
                    "speed": 1.2,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 6,
                "size": 75,
                "width": 17.50035,
                "delay": 0.333,
                "reload": 0.3,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.6,
                    "health": 5,
                    "damage": 1,
                    "speed": 1.2,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 17.50035,
                "delay": 0.001,
                "reload": 0.3,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.6,
                    "health": 5,
                    "damage": 1,
                    "speed": 1.2,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 0
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 0
            },
            {
                "name": "Max Health",
                "max": 0
            },
            {
                "name": "Health Regen",
                "max": 0
            }
        ]
    },
    {
        "id": 93,
        "name": "Dominator",
        "upgradeMessage": "",
        "levelRequirement": 0,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 6000,
        "preAddon": "dombase",
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 60,
                "width": 21,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "forceFire": true,
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 20,
                    "damage": 3,
                    "speed": 4,
                    "scatterRate": 1,
                    "lifeLength": 3.2,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.7853981633974483,
                "offset": 0,
                "size": 60,
                "width": 21,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "forceFire": true,
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 20,
                    "damage": 3,
                    "speed": 4,
                    "scatterRate": 1,
                    "lifeLength": 3.2,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.5707963267948966,
                "offset": 0,
                "size": 60,
                "width": 21,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "forceFire": true,
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 20,
                    "damage": 3,
                    "speed": 4,
                    "scatterRate": 1,
                    "lifeLength": 3.2,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.356194490192345,
                "offset": 0,
                "size": 60,
                "width": 21,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "forceFire": true,
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 20,
                    "damage": 3,
                    "speed": 4,
                    "scatterRate": 1,
                    "lifeLength": 3.2,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 60,
                "width": 21,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "forceFire": true,
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 20,
                    "damage": 3,
                    "speed": 4,
                    "scatterRate": 1,
                    "lifeLength": 3.2,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 3.9269908169872414,
                "offset": 0,
                "size": 60,
                "width": 21,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "forceFire": true,
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 20,
                    "damage": 3,
                    "speed": 4,
                    "scatterRate": 1,
                    "lifeLength": 3.2,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 4.71238898038469,
                "offset": 0,
                "size": 60,
                "width": 21,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "forceFire": true,
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 20,
                    "damage": 3,
                    "speed": 4,
                    "scatterRate": 1,
                    "lifeLength": 3.2,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 5.497787143782138,
                "offset": 0,
                "size": 60,
                "width": 21,
                "delay": 0,
                "reload": 1.5,
                "recoil": 0,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "forceFire": true,
                "bullet": {
                    "type": "trap",
                    "sizeRatio": 0.8,
                    "health": 20,
                    "damage": 3,
                    "speed": 4,
                    "scatterRate": 1,
                    "lifeLength": 3.2,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 0
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 0
            },
            {
                "name": "Max Health",
                "max": 0
            },
            {
                "name": "Health Regen",
                "max": 0
            }
        ]
    },
    {
        "id": 94,
        "name": "Manufacturer",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 100,
                "width": 64,
                "delay": 0.25,
                "reload": 8,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 2,
                "canControlDrones": true,
                "bullet": {
                    "type": "megaminion",
                    "sizeRatio": 1,
                    "health": 8,
                    "damage": 1.4,
                    "speed": 0.43,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Minion Damage",
                "max": 7
            },
            {
                "name": "Minion Health",
                "max": 7
            },
            {
                "name": "Minion Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 95,
        "name": "Roundabout",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.8,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "pronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 100,
                "width": 42,
                "delay": 0,
                "reload": 3,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "trapLauncher",
                "canControlDrones": true,
                "bullet": {
                    "type": "drone2",
                    "sizeRatio": 0.8,
                    "health": 1.5,
                    "damage": 1.5,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 1.5,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 96,
        "name": "Gattling Gun",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 105,
                "width": 42,
                "delay": 0,
                "reload": 0.5,
                "recoil": 0.4,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.75,
                    "health": 0.5,
                    "damage": 0.35,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0.33,
                "reload": 0.5,
                "recoil": 0.4,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.75,
                    "health": 0.5,
                    "damage": 0.35,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 85,
                "width": 42,
                "delay": 0.66,
                "reload": 0.5,
                "recoil": 0.4,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.75,
                    "health": 0.5,
                    "damage": 0.35,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id":  97,
        "name": "Drizzler",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 110,
                "width": 36.75,
                "delay": 1,
                "reload": 0.5,
                "recoil": 0,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 0.8,
                    "health": 1,
                    "damage": 0.15,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 0.5,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.7,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 98,
        "name": "Mechanic",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 70,
                "width": 42,
                "delay": 0,
                "reload": 4,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "engitrapLauncher",
                "bullet": {
                    "type": "autotrap",
                    "sizeRatio": 0.8,
                    "health": 1.25,
                    "damage": 0.8,
                    "speed": 1.5,
                    "scatterRate": 1,
                    "lifeLength": 3,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 0.5,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 0.575,
                    "speed": 1,
                    "scatterRate": 3,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Penetration",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 99,
        "name": "Auto 4",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "auto4",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Trap Damage",
                "max": 7
            },
            {
                "name": "Trap Health",
                "max": 7
            },
            {
                "name": "Trap Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 100,
        "name": "Lich",
        "upgradeMessage": "Kill pentagons to possess them",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "canClaimPentagons": true,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "autorocket",
        "sides": 5,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0.6283185307179586,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 5,
                    "damage": 0.42,
                    "speed": 0.47,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.6283185307179586,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 5,
                    "damage": 0.42,
                    "speed": 0.47,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 1.8849555921538759,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 18,
                "recoil": 0,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 5,
                    "damage": 0.42,
                    "speed": 0.47,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -1.8849555921538759,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 18,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 5,
                    "damage": 0.42,
                    "speed": 0.47,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },   
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 80,
                "width": 42,
                "delay": 0,
                "reload": 5,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                "bullet": {
                    "type": "necropentadrone",
                    "sizeRatio": 1,
                    "health": 5,
                    "damage": 0.42,
                    "speed": 0.47,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }      
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Weapon Damage",
                "max": 7
            },
            {
                "name": "Weapon Penetration",
                "max": 7
            },
            {
                "name": "Weapon Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 101,
        "name": "Animator",
        "upgradeMessage": "Kill triangles to possess them",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "canClaimTriangles": true,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 3,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 1.0471975511965976,
                "offset": 0,
                "size": 65,
                "width": 42,
                "delay": 0.5,
                "reload": 10,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                 
                "bullet": {
                    "type": "necrotriangledrone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.62,
                    "speed": 0.8,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                } 
            },
            {
                "angle": -1.0471975511965976,
                "offset": 0,
                "size": 65,
                "width": 42,
                "delay": 0.5,
                "reload": 10,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 0,
                "canControlDrones": true,
                 
                "bullet": {
                    "type": "necrotriangledrone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.62,
                    "speed": 0.8,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                } 
            },
            {
                "angle": 3.141592653589793,
                "offset": 0,
                "size": 60,
                "width": 42,
                "delay": 0,
                "reload": 6,
                "recoil": 1,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "droneCount": 3,
                "canControlDrones": true,
                "bullet": {
                    "type": "drone",
                    "sizeRatio": 1,
                    "health": 2,
                    "damage": 0.7,
                    "speed": 0.8,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Drone Count",
                "max": 7
            },
            {
                "name": "Drone Damage",
                "max": 7
            },
            {
                "name": "Drone Health",
                "max": 7
            },
            {
                "name": "Drone Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 102,
        "name": "Spinner",
        "upgradeMessage": "Hold right click to reverse rotation",
        "levelRequirement": 30,
        "upgrades": [103, 104],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "pronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 100,
                "width": 52,
                "delay": 0,
                "reload": 2.5,
                "recoil": 3,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "spinner",
                    "sizeRatio": 1,
                    "health": 1.5,
                    "damage": 0.8,
                    "speed": 0.35,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.25
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Spinner Damage",
                "max": 7
            },
            {
                "name": "Spinner Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 103,
        "name": "Rotater",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "pronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 100,
                "width": 71.4,
                "delay": 0,
                "reload": 4,
                "recoil": 8,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "megaspinner",
                    "sizeRatio": 1,
                    "health": 4,
                    "damage": 1.3,
                    "speed": 0.35,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Spinner Damage",
                "max": 7
            },
            {
                "name": "Spinner Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 104,
        "name": "Twister",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "pronounced",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 100,
                "width": 41.6,
                "delay": 0,
                "reload": 3,
                "recoil": 3,
                "isTrapezoid": true,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "spinner4",
                    "sizeRatio": 1.25,
                    "health": 1.5,
                    "damage": 0.8,
                    "speed": 0.35,
                    "scatterRate": 0.3,
                    "lifeLength": 1,
                    "absorbtionFactor": 0.25
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Spinner Damage",
                "max": 7
            },
            {
                "name": "Spinner Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 105,
        "name": "Arena Closer",
        "upgradeMessage": "",
        "levelRequirement": 0,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "canClaimSquares": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 75,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": null,
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 300,
                    "damage": 7,
                    "speed": 2,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 106,
        "name": "Dominator",
        "upgradeMessage": "",
        "levelRequirement": 0,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 6000,
        "preAddon": "dombase",
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 75,
                "width": 21.5,
                "delay": 0,
                "reload": 0.65,
                "recoil": 0,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 2,
                    "damage": 1,
                    "speed": 3,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -0.7853981633974483,
                "offset": 0,
                "size": 75,
                "width": 21.5,
                "delay": 0,
                "reload": 0.65,
                "recoil": 0,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 2,
                    "damage": 1,
                    "speed": 3,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 0.7853981633974483,
                "offset": 0,
                "size": 75,
                "width": 21.5,
                "delay": 0,
                "reload": 0.65,
                "recoil": 0,
                "isTrapezoid": true,
                "trapezoidDirection": 3.141592653589793,
                "addon": null,
                "droneCount": 4294967295,
                "canControlDrones": true,
                "bullet": {
                    "type": "swarm",
                    "sizeRatio": 0.7,
                    "health": 2,
                    "damage": 1,
                    "speed": 3,
                    "scatterRate": 0,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 0
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 0
            },
            {
                "name": "Max Health",
                "max": 0
            },
            {
                "name": "Health Regen",
                "max": 0
            }
        ]
    },
    {
        "id": 107,
        "name": "Dominator",
        "upgradeMessage": "",
        "levelRequirement": 0,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 6000,
        "preAddon": "dombase",
        "postAddon": null,
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 80,
                "width": 38,
                "delay": 0,
                "reload": 7,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 2,
                "canControlDrones": false,
                "bullet": {
                    "type": "domminion",
                    "sizeRatio": 1,
                    "health": 9,
                    "damage": 1,
                    "speed": 1.7,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": 2.0943951023931953,
                "offset": 0,
                "size": 80,
                "width": 38,
                "delay": 0,
                "reload": 7,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 2,
                "canControlDrones": false,
                "bullet": {
                    "type": "domminion",
                    "sizeRatio": 1,
                    "health": 9,
                    "damage": 1,
                    "speed": 1.7,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            },
            {
                "angle": -2.0943951023931953,
                "offset": 0,
                "size": 80,
                "width": 38,
                "delay": 0,
                "reload": 7,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "minionLauncher",
                "droneCount": 2,
                "canControlDrones": false,
                "bullet": {
                    "type": "domminion",
                    "sizeRatio": 1,
                    "health": 9,
                    "damage": 1,
                    "speed": 1.7,
                    "scatterRate": 0,
                    "lifeLength": -1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 0
            },
            {
                "name": "Reload",
                "max": 0
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 0
            },
            {
                "name": "Max Health",
                "max": 0
            },
            {
                "name": "Health Regen",
                "max": 0
            }
        ]
    },
    {
        "id": 108,
        "name": "Rammer",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.9,
        "absorbtionFactor": 0.8,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "bumper",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
            "angle": 3.141592653589793,
            "offset": 0,
            "size": 80,
            "width": 65,
            "delay": 0,
            "reload": 2.5,
            "recoil": 6,
            "isTrapezoid": false,
            "trapezoidDirection": 0,
            "addon": null,
            "bullet": {
                "type": "bullet",
                "sizeRatio": 1,
                "health": 5,
                "damage": 0,
                "speed": 0.85,
                "scatterRate": 1,
                "lifeLength": 1,
                "absorbtionFactor": 0.4
            }
        }],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 10
            },
            {
                "name": "Reload",
                "max": 10
            },
            {
                "name": "Bullet Damage",
                "max": 0
            },
            {
                "name": "Bullet Penetration",
                "max": 0
            },
            {
                "name": "Bullet Speed",
                "max": 0
            },
            {
                "name": "Body Damage",
                "max": 10
            },
            {
                "name": "Max Health",
                "max": 10
            },
            {
                "name": "Health Regen",
                "max": 10
            }
        ]
    },
    {
        "id": 109,
        "name": "Auto Tank",
        "upgradeMessage": "",
        "levelRequirement": 30,
        "upgrades": [62,63, 70, 73,110],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "autoturret",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "null",
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 110,
        "name": "Bombard",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 0.8,
        "absorbtionFactor": 0.1,
        "speed": 0.935,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "bigautoturret",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [
            {
                "angle": 0,
                "offset": 0,
                "size": 95,
                "width": 42,
                "delay": 0,
                "reload": 1,
                "recoil": 1,
                "isTrapezoid": false,
                "trapezoidDirection": 0,
                "addon": "null",
                "bullet": {
                    "type": "bullet",
                    "sizeRatio": 1,
                    "health": 1,
                    "damage": 1,
                    "speed": 1,
                    "scatterRate": 1,
                    "lifeLength": 1,
                    "absorbtionFactor": 1
                }
            }
        ],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    },
    {
        "id": 111,
        "name": "Joint 3",
        "upgradeMessage": "",
        "levelRequirement": 45,
        "upgrades": [],
        "flags": {
            "invisibility": false,
            "zoomAbility": false,
            "devOnly": false
        },
        "visibilityRateShooting": 0.23,
        "visibilityRateMoving": 0.08,
        "invisibilityRate": 0.03,
        "fieldFactor": 1,
        "absorbtionFactor": 1,
        "speed": 1,
        "maxHealth": 50,
        "preAddon": null,
        "postAddon": "joint3",
        "sides": 1,
        "borderWidth": 15,
        "barrels": [],
        "stats": [
            {
                "name": "Movement Speed",
                "max": 7
            },
            {
                "name": "Reload",
                "max": 7
            },
            {
                "name": "Bullet Damage",
                "max": 7
            },
            {
                "name": "Bullet Penetration",
                "max": 7
            },
            {
                "name": "Bullet Speed",
                "max": 7
            },
            {
                "name": "Body Damage",
                "max": 7
            },
            {
                "name": "Max Health",
                "max": 7
            },
            {
                "name": "Health Regen",
                "max": 7
            }
        ]
    }
]`);
exports.default = TankDefinitions;
exports.TankCount = TankDefinitions.reduce((a, b) => b ? a + 1 : a, 0);
const getTankById = function (id) {
    return (id < 0 ? DevTankDefinitions_1.default[~id] : TankDefinitions[id]) || null;
};
exports.getTankById = getTankById;
const getTankByName = function (tankName) {
    return TankDefinitions.find(tank => tank && tank.name === tankName) || DevTankDefinitions_1.default.find(tank => tank && tank.name === tankName) || null;
};
exports.getTankByName = getTankByName;
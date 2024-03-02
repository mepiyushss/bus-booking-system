const  buses= [
  
    {
      "busName": "Bus100",
      "busNumber": "100",
      "stops": [
        {
          "stopName": "Central Station",
          "arrivalTime": "08:00 AM",
          "departureTime": "08:10 AM"
        },
        {
          "stopName": "City Market",
          "arrivalTime": "08:30 AM",
          "departureTime": "08:35 AM"
        },
        {
          "stopName": "Airport",
          "arrivalTime": "09:00 AM",
          "departureTime": "09:10 AM"
        },
        {
          "stopName": "Bus Stand",
          "arrivalTime": "09:30 AM",
          "departureTime": "09:35 AM"
        }
      ],
      "isAC": true,
      "seats": {
        "sleeper": [
          {"id": 1, "number": "A1", "available": true},
          {"id": 2, "number": "A2", "available": true},
          {"id": 3, "number": "A3", "available": false},
          {"id": 4, "number": "A4", "available": true},
          {"id": 5, "number": "A5", "available": false},
          {"id": 6, "number": "A6", "available": true},
          {"id": 7, "number": "A7", "available": false},
          {"id": 8, "number": "A8", "available": true},
          {"id": 9, "number": "A9", "available": true},
          {"id": 10, "number": "A10", "available": true},
          {"id": 11, "number": "A11", "available": true},
          {"id": 12, "number": "A12", "available": true},
          {"id": 13, "number": "A13", "available": true},
          {"id": 14, "number": "A14", "available": true},
          {"id": 15, "number": "A15", "available": true},
          {"id": 16, "number": "A16", "available": true},
          {"id": 17, "number": "A17", "available": true},
          {"id": 18, "number": "A18", "available": true},
          {"id": 19, "number": "A19", "available": true},
          {"id": 20, "number": "A20", "available": true}
        ],
        "seater": [
          {"id": 21, "number": "B1", "available": true},
          {"id": 22, "number": "B2", "available": true},
          {"id": 23, "number": "B3", "available": true},
          {"id": 24, "number": "B4", "available": false},
          {"id": 25, "number": "B5", "available": true},
          {"id": 26, "number": "B6", "available": true},
          {"id": 27, "number": "B7", "available": true},
          {"id": 28, "number": "B8", "available": true},
          {"id": 29, "number": "B9", "available": true},
          {"id": 30, "number": "B10", "available": false},
          {"id": 31, "number": "B11", "available": false},
          {"id": 32, "number": "B12", "available": true},
          {"id": 33, "number": "B13", "available": true},
          {"id": 34, "number": "B14", "available": true},
          {"id": 35, "number": "B15", "available": true},
          {"id": 36, "number": "B16", "available": true},
          {"id": 37, "number": "B17", "available": true},
          {"id": 38, "number": "B18", "available": true},
          {"id": 39, "number": "B19", "available": false},
          {"id": 40, "number": "B20", "available": true}
        ]
      }
    },
    {
      "busName": "Bus200",
      "busNumber": "200",
      "stops": [
        {
          "stopName": "Main Terminal",
          "arrivalTime": "09:00 AM",
          "departureTime": "09:10 AM"
        },
        {
          "stopName": "Shopping Center",
          "arrivalTime": "09:30 AM",
          "departureTime": "09:35 AM"
        },
        {
          "stopName": "University Campus",
          "arrivalTime": "10:00 AM",
          "departureTime": "10:10 AM"
        },
        {
          "stopName": "Residential Area",
          "arrivalTime": "10:30 AM",
          "departureTime": "10:35 AM"
        }
      ],
      "isAC": false,
      "seats": {
        "sleeper": [
          {"id": 41, "number": "C1", "available": true},
          {"id": 42, "number": "C2", "available": true},
          {"id": 43, "number": "C3", "available": true},
          {"id": 44, "number": "C4", "available": true},
          {"id": 45, "number": "C5", "available": true},
          {"id": 46, "number": "C6", "available": true},
          {"id": 47, "number": "C7", "available": true},
          {"id": 48, "number": "C8", "available": true},
          {"id": 49, "number": "C9", "available": true},
          {"id": 50, "number": "C10", "available": true},
          {"id": 51, "number": "C11", "available": true},
          {"id": 52, "number": "C12", "available": true},
          {"id": 53, "number": "C13", "available": true},
          {"id": 54, "number": "C14", "available": true},
          {"id": 55, "number": "C15", "available": true},
          {"id": 56, "number": "C16", "available": true},
          {"id": 57, "number": "C17", "available": true},
          {"id": 58, "number": "C18", "available": true}
        ],
        "seater": [
          {"id": 59, "number": "D1", "available": true},
          {"id": 60, "number": "D2", "available": true},
          {"id": 61, "number": "D3", "available": true},
          {"id": 62, "number": "D4", "available": true},
          {"id": 63, "number": "D5", "available": true},
          {"id": 64, "number": "D6", "available": true},
          {"id": 65, "number": "D7", "available": true},
          {"id": 66, "number": "D8", "available": true},
          {"id": 67, "number": "D9", "available": true},
          {"id": 68, "number": "D10", "available": true},
          {"id": 69, "number": "D11", "available": true},
          {"id": 70, "number": "D12", "available": true},
          {"id": 71, "number": "D13", "available": true},
          {"id": 72, "number": "D14", "available": true},
          {"id": 73, "number": "D15", "available": true},
          {"id": 74, "number": "D16", "available": true},
          {"id": 75, "number": "D17", "available": true},
          {"id": 76, "number": "D18", "available": true}
        ]
      }
    },
    {
      "busName": "Bus300",
      "busNumber": "300",
      "stops": [
        {
          "stopName": "Downtown Station",
          "arrivalTime": "08:15 AM",
          "departureTime": "08:30 AM"
        },
        {
          "stopName": "Mall",
          "arrivalTime": "09:00 AM",
          "departureTime": "09:15 AM"
        },
        {
          "stopName": "Library",
          "arrivalTime": "09:45 AM",
          "departureTime": "10:00 AM"
        },
        {
          "stopName": "Park",
          "arrivalTime": "10:30 AM",
          "departureTime": "10:45 AM"
        }
      ],
      "isAC": true,
      "seats": {
        "sleeper": [
          {"id": 77, "number": "E1", "available": true},
          {"id": 78, "number": "E2", "available": true},
          {"id": 79, "number": "E3", "available": true},
          {"id": 80, "number": "E4", "available": true},
          {"id": 81, "number": "E5", "available": true},
          {"id": 82, "number": "E6", "available": true},
          {"id": 83, "number": "E7", "available": true},
          {"id": 84, "number": "E8", "available": true},
          {"id": 85, "number": "E9", "available": true},
          {"id": 86, "number": "E10", "available": true},
          {"id": 87, "number": "E11", "available": true},
          {"id": 88, "number": "E12", "available": true},
          {"id": 89, "number": "E13", "available": true},
          {"id": 90, "number": "E14", "available": true},
          {"id": 91, "number": "E15", "available": true},
          {"id": 92, "number": "E16", "available": true},
          {"id": 93, "number": "E17", "available": true},
          {"id": 94, "number": "E18", "available": true}
        ],
        "seater": [
          {"id": 95, "number": "F1", "available": true},
          {"id": 96, "number": "F2", "available": true},
          {"id": 97, "number": "F3", "available": true},
          {"id": 98, "number": "F4", "available": true},
          {"id": 99, "number": "F5", "available": true},
          {"id": 100, "number": "F6", "available": true},
          {"id": 101, "number": "F7", "available": true},
          {"id": 102, "number": "F8", "available": true},
          {"id": 103, "number": "F9", "available": true},
          {"id": 104, "number": "F10", "available": true},
          {"id": 105, "number": "F11", "available": true},
          {"id": 106, "number": "F12", "available": true},
          {"id": 107, "number": "F13", "available": true},
          {"id": 108, "number": "F14", "available": true},
          {"id": 109, "number": "F15", "available": true},
          {"id": 110, "number": "F16", "available": true},
          {"id": 111, "number": "F17", "available": true},
          {"id": 112, "number": "F18", "available": true},
          {"id": 113, "number": "F19", "available": true},
          {"id": 114, "number": "F20", "available": true}
        ]
      }
    },
    {
      "busName": "Bus400",
      "busNumber": "400",
      "stops": [
        {
          "stopName": "Suburb Station",
          "arrivalTime": "08:30 AM",
          "departureTime": "08:45 AM"
        },
        {
          "stopName": "Grocery Store",
          "arrivalTime": "09:15 AM",
          "departureTime": "09:30 AM"
        },
        {
          "stopName": "School",
          "arrivalTime": "10:00 AM",
          "departureTime": "10:15 AM"
        },
        {
          "stopName": "Hospital",
          "arrivalTime": "10:45 AM",
          "departureTime": "11:00 AM"
        }
      ],
      "isAC": false,
      "seats": {
        "sleeper": [
          {"id": 115, "number": "G1", "available": true},
          {"id": 116, "number": "G2", "available": true},
          {"id": 117, "number": "G3", "available": true},
          {"id": 118, "number": "G4", "available": true},
          {"id": 119, "number": "G5", "available": true},
          {"id": 120, "number": "G6", "available": true},
          {"id": 121, "number": "G7", "available": true},
          {"id": 122, "number": "G8", "available": true},
          {"id": 123, "number": "G9", "available": true},
          {"id": 124, "number": "G10", "available": true},
          {"id": 125, "number": "G11", "available": true},
          {"id": 126, "number": "G12", "available": true},
          {"id": 127, "number": "G13", "available": true},
          {"id": 128, "number": "G14", "available": true},
          {"id": 129, "number": "G15", "available": true},
          {"id": 130, "number": "G16", "available": true},
          {"id": 131, "number": "G17", "available": true},
          {"id": 132, "number": "G18", "available": true}
        ],
        "seater": [
          {"id": 133, "number": "H1", "available": true},
          {"id": 134, "number": "H2", "available": true},
          {"id": 135, "number": "H3", "available": true},
          {"id": 136, "number": "H4", "available": true},
          {"id": 137, "number": "H5", "available": true},
          {"id": 138, "number": "H6", "available": true},
          {"id": 139, "number": "H7", "available": true},
          {"id": 140, "number": "H8", "available": true},
          {"id": 141, "number": "H9", "available": true},
          {"id": 142, "number": "H10", "available": true},
          {"id": 143, "number": "H11", "available": true},
          {"id": 144, "number": "H12", "available": true},
          {"id": 145, "number": "H13", "available": true},
          {"id": 146, "number": "H14", "available": true},
          {"id": 147, "number": "H15", "available": true},
          {"id": 148, "number": "H16", "available": true},
          {"id": 149, "number": "H17", "available": true},
          {"id": 150, "number": "H18", "available": true},
          {"id": 151, "number": "H19", "available": true},
          {"id": 152, "number": "H20", "available": true}
        ]
      }
    },
    {
      "busName": "Bus500",
      "busNumber": "500",
      "stops": [
        {
          "stopName": "Beach Station",
          "arrivalTime": "09:30 AM",
          "departureTime": "09:45 AM"
        },
        {
          "stopName": "Cinema",
          "arrivalTime": "10:15 AM",
          "departureTime": "10:30 AM"
        },
        {
          "stopName": "Amusement Park",
          "arrivalTime": "11:00 AM",
          "departureTime": "11:15 AM"
        },
        {
          "stopName": "Restaurant",
          "arrivalTime": "11:45 AM",
          "departureTime": "12:00 PM"
        }
      ],
      "isAC": true,
      "seats": {
        "sleeper": [
          {"id": 153, "number": "I1", "available": true},
          {"id": 154, "number": "I2", "available": true},
          {"id": 155, "number": "I3", "available": true},
          {"id": 156, "number": "I4", "available": true},
          {"id": 157, "number": "I5", "available": true},
          {"id": 158, "number": "I6", "available": true},
          {"id": 159, "number": "I7", "available": true},
          {"id": 160, "number": "I8", "available": true},
          {"id": 161, "number": "I9", "available": true},
          {"id": 162, "number": "I10", "available": true},
          {"id": 163, "number": "I11", "available": true},
          {"id": 164, "number": "I12", "available": true},
          {"id": 165, "number": "I13", "available": true},
          {"id": 166, "number": "I14", "available": true},
          {"id": 167, "number": "I15", "available": true},
          {"id": 168, "number": "I16", "available": true},
          {"id": 169, "number": "I17", "available": true},
          {"id": 170, "number": "I18", "available": true}
        ],
        "seater": [
          {"id": 171, "number": "J1", "available": true},
          {"id": 172, "number": "J2", "available": true},
          {"id": 173, "number": "J3", "available": true},
          {"id": 174, "number": "J4", "available": true},
          {"id": 175, "number": "J5", "available": true},
          {"id": 176, "number": "J6", "available": true},
          {"id": 177, "number": "J7", "available": true},
          {"id": 178, "number": "J8", "available": true},
          {"id": 179, "number": "J9", "available": true},
          {"id": 180, "number": "J10", "available": true},
          {"id": 181, "number": "J11", "available": true},
          {"id": 182, "number": "J12", "available": true},
          {"id": 183, "number": "J13", "available": true},
          {"id": 184, "number": "J14", "available": true},
          {"id": 185, "number": "J15", "available": true},
          {"id": 186, "number": "J16", "available": true},
          {"id": 187, "number": "J17", "available": true},
          {"id": 188, "number": "J18", "available": true},
          {"id": 189, "number": "J19", "available": true},
          {"id": 190, "number": "J20", "available": true}
        ]
      }
    },
    {
      "busName": "Bus600",
      "busNumber": "600",
      "stops": [
        {
          "stopName": "Mountain Station",
          "arrivalTime": "10:00 AM",
          "departureTime": "10:15 AM"
        },
        {
          "stopName": "Hiking Trail",
          "arrivalTime": "10:45 AM",
          "departureTime": "11:00 AM"
        },
        {
          "stopName": "Scenic Viewpoint",
          "arrivalTime": "11:30 AM",
          "departureTime": "11:45 AM"
        },
        {
          "stopName": "Camping Site",
          "arrivalTime": "12:15 PM",
          "departureTime": "12:30 PM"
        }
      ],
      "isAC": false,
      "seats": {
        "sleeper": [
          {"id": 191, "number": "K1", "available": true},
          {"id": 192, "number": "K2", "available": true},
          {"id": 193, "number": "K3", "available": true},
          {"id": 194, "number": "K4", "available": true},
          {"id": 195, "number": "K5", "available": true},
          {"id": 196, "number": "K6", "available": true},
          {"id": 197, "number": "K7", "available": true},
          {"id": 198, "number": "K8", "available": true},
          {"id": 199, "number": "K9", "available": true},
          {"id": 200, "number": "K10", "available": true},
          {"id": 201, "number": "K11", "available": true},
          {"id": 202, "number": "K12", "available": true},
          {"id": 203, "number": "K13", "available": true},
          {"id": 204, "number": "K14", "available": true},
          {"id": 205, "number": "K15", "available": true},
          {"id": 206, "number": "K16", "available": true},
          {"id": 207, "number": "K17", "available": true},
          {"id": 208, "number": "K18", "available": true}
        ],
        "seater": [
          {"id": 209, "number": "L1", "available": true},
          {"id": 210, "number": "L2", "available": true},
          {"id": 211, "number": "L3", "available": true},
          {"id": 212, "number": "L4", "available": true},
          {"id": 213, "number": "L5", "available": true},
          {"id": 214, "number": "L6", "available": true},
          {"id": 215, "number": "L7", "available": true},
          {"id": 216, "number": "L8", "available": true},
          {"id": 217, "number": "L9", "available": true},
          {"id": 218, "number": "L10", "available": true},
          {"id": 219, "number": "L11", "available": true},
          {"id": 220, "number": "L12", "available": true},
          {"id": 221, "number": "L13", "available": true},
          {"id": 222, "number": "L14", "available": true},
          {"id": 223, "number": "L15", "available": true},
          {"id": 224, "number": "L16", "available": true},
          {"id": 225, "number": "L17", "available": true},
          {"id": 226, "number": "L18", "available": true},
          {"id": 227, "number": "L19", "available": true},
          {"id": 228, "number": "L20", "available": true}
        ]
      }
    }
  ]
  
  export default buses
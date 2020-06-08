const cpu = [
  {
    //---Intel CPU's------------------------------------------------------
    manufacturer: "Intel",
    family: "Pentium",
    model: "4560",
    price: 65
  },
  {
    manufacturer: "Intel",
    family: "i3",
    model: "9100F",
    price: 80
  },
  {
    manufacturer: "Intel",
    family: "i3",
    model: "9100",
    price: 135
  },
  {
    manufacturer: "Intel",
    family: "i5",
    model: "9400F",
    price: 155
  },
  {
    manufacturer: "Intel",
    family: "i5",
    model: "9500F",
    price: 200
  },
  {
    manufacturer: "Intel",
    family: "i5",
    model: "8600K",
    price: 280
  },
  {
    manufacturer: "Intel",
    family: "i7",
    model: "7700",
    price: 300
  },
  {
    manufacturer: "Intel",
    family: "i7",
    model: "8700",
    price: 350
  },
  {
    manufacturer: "Intel",
    family: "i7",
    model: "9700K",
    price: 400
  },
  {
    manufacturer: "Intel",
    family: "i9",
    model: "9900",
    price: 480
  },
  {
    manufacturer: "Intel",
    family: "i9",
    model: "9900KS",
    price: 600
  },
  {
    manufacturer: "Intel",
    family: "i9",
    model: "10940X",
    price: 900
  },
  //---AMD CPU's---------------------------------------------------
  {
    manufacturer: "AMD",
    family: "Ryzen 3",
    model: "1200AF",
    price: 55
  },
  {
    manufacturer: "AMD",
    family: "Ryzen 5",
    model: "1600",
    price: 100
  },
  {
    manufacturer: "AMD",
    family: "Ryzen 5",
    model: "2600X",
    price: 145
  },
  {
    manufacturer: "AMD",
    family: "Ryzen 7",
    model: "2700X",
    price: 190
  },
  {
    manufacturer: "AMD",
    family: "Threadripper",
    model: "1900X",
    price: 220
  },
  {
    manufacturer: "AMD",
    family: "Threadripper",
    model: "3700X",
    price: 330
  },
  {
    manufacturer: "AMD",
    family: "Threadripper",
    model: "3800X",
    price: 380
  },
  {
    manufacturer: "AMD",
    family: "Ryzen 9",
    model: "3900X",
    price: 490
  },
  {
    manufacturer: "AMD",
    family: "Ryzen 9",
    model: "3950X",
    price: 820
  },
  {
    manufacturer: "AMD",
    family: "Threadripper",
    model: "3960X",
    price: 1500
  }
];

const gpu = [
  //--NVIDIA GPU's------------------------------------------
  {
    manufacturer: "Nvidia",
    model: "GTX 1050 Ti",
    price: 150
  },
  {
    manufacturer: "Nvidia",
    model: "GTX 1060",
    price: 180
  },
  {
    manufacturer: "Nvidia",
    model: "GTX 1660 Ti",
    price: 280
  },
  {
    manufacturer: "Nvidia",
    model: "RTX 2060",
    price: 350
  },
  {
    manufacturer: "Nvidia",
    model: "RTX 2070",
    price: 430
  },
  {
    manufacturer: "Nvidia",
    model: "RTX 2080",
    price: 150
  },
  //--AMD GPU's-----------------------------------
  {
    manufacturer: "AMD",
    model: "RX 570",
    price: 140
  },
  {
    manufacturer: "AMD",
    model: "RX 590",
    price: 200
  },
  {
    manufacturer: "AMD",
    model: "RX 5500 XT",
    price: 250
  },
  {
    manufacturer: "AMD",
    model: "RX 5600 XT",
    price: 370
  },
  {
    manufacturer: "AMD",
    model: "RX 5700",
    price: 600
  }
];

const motherboard = [
  //--Intel Chipset------------------------------------------
  //--ATX
  {
    format: "ATX",
    manufacturer: "Gigabyte",
    model: "H110-D3A",
    price: 40
  },
  {
    format: "ATX",
    manufacturer: "Gigabyte",
    model: "B360 HD3",
    price: 80
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "B360-H",
    price: 120
  },
  {
    format: "ATX",
    manufacturer: "Gigabyte",
    model: "Z390 GAMING",
    price: 160
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "Z390-F",
    price: 200
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "Z390-E",
    price: 250
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "MAXIMUS XI Z390",
    price: 400
  },
  //Micro-ATX
  {
    format: "Micro-ATX",
    manufacturer: "MSI",
    model: "B250-M Bazooka",
    price: 60
  },
  {
    format: "Micro-ATX",
    manufacturer: "Asus",
    model: "TUF B360M-PLUS Gaming",
    price: 100
  },
  {
    format: "Micro-ATX",
    manufacturer: "MSI",
    model: "MAG X390M Mortar",
    price: 150
  },
  //--AMD Chipset------------------------------------------
  //--ATX
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "X370-PRO",
    price: 70
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "X370-PRO",
    price: 100
  },
  {
    format: "ATX",
    manufacturer: "MSI",
    model: "B450 GAMING PRO",
    price: 150
  },
  {
    format: "ATX",
    manufacturer: "Gigabyte",
    model: "X570 GAMING X",
    price: 180
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "X570 AUROS ELITE",
    price: 220
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "X570-F GAMING",
    price: 270
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "CROSSHAIR VII FORMULA",
    price: 550
  },
  //---Micro-ATX
  {
    format: "Micro-ATX",
    manufacturer: "Gigabyte",
    model: "A320M-S2H V2",
    price: 50
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "TUF B450M-Pro Gaming",
    price: 100
  },
  {
    format: "ATX",
    manufacturer: "Asus",
    model: "X570M PRO 4	",
    price: 200
  }
];

const ram = [
  //2400MHz
  {
    manufacturer: "G.SKILL",
    model: "Aegis",
    speed: "2400MHz",
    size: "4GB",
    price: 20
  },
  {
    manufacturer: "HyperX",
    model: "Fury",
    speed: "2400MHz",
    size: "8GB",
    price: 40
  },
  {
    manufacturer: "HyperX",
    model: "Predator",
    speed: "2400MHz",
    size: "16GB",
    price: 90
  },
  //3000MHz
  {
    manufacturer: "HyperX",
    model: "Fury RGB",
    speed: "3000MHz",
    size: "8GB",
    price: 50
  },
  {
    manufacturer: "HyperX",
    model: "Predator RGB",
    speed: "3000MHz",
    size: "16GB",
    price: 120
  },
  {
    manufacturer: "Corsair",
    model: "Vengeance LPX",
    speed: "3000MHz",
    size: "32GB",
    price: 170
  },
  //4000MHz
  {
    manufacturer: "G.SKILL",
    model: "Trident Z Royal RGB",
    speed: "4000MHz",
    size: "16GB",
    price: 170
  },
  {
    manufacturer: "G.SKILL",
    model: "Trident Z",
    speed: "4000MHz",
    size: "32GB",
    price: 360
  },
  {
    manufacturer: "G.SKILL",
    model: "Trident Z Neo RGB",
    speed: "4000MHz",
    size: "64GB",
    price: 400
  }
];

const storage = [
  //---HDD
  {
    manufacturer: "Seagate",
    type: "HDD",
    model: "Barracuda 7200RPM",
    size: "1TB",
    price: 40
  },
  {
    manufacturer: "Western Digital",
    type: "HDD",
    model: "Black 7200RPM",
    size: "2TB",
    price: 120
  },
  {
    manufacturer: "Seagate",
    type: "HDD",
    model: "Barracuda 5400RPM",
    size: "4TB",
    price: 180
  },
  //---SSD
  {
    manufacturer: "Gigabyte",
    type: "SSD",
    model: "TLC",
    size: "250GB",
    price: 40
  },
  {
    manufacturer: "Kingston",
    type: "SSD",
    model: "A400 TLC",
    size: "500GB",
    price: 60
  },
  {
    manufacturer: "Toshiba",
    type: "SSD",
    model: "TR200",
    size: "1TB",
    price: 120
  },
  {
    manufacturer: "Kingston",
    type: "SSD",
    model: "A400 TLC",
    size: "2TB",
    price: 230
  },
  //---M.2
  {
    manufacturer: "Western Digital",
    type: "M.2",
    model: "Green",
    size: "120GB",
    price: 30
  },
  {
    manufacturer: "Western Digital",
    type: "M.2",
    model: "Green",
    size: "250GB",
    price: 40
  },
  {
    manufacturer: "Gigabyte ",
    type: "M.2",
    model: "TLC",
    size: "500GB",
    price: 80
  },
  {
    manufacturer: "Western Digital",
    type: "M.2",
    model: "Black SN750",
    size: "1TB",
    price: 200
  },
  {
    manufacturer: "Samsung",
    type: "M.2",
    model: "970 Evo Plus",
    size: "2TB",
    price: 450
  }
];

const cases = [
  {
    manufacturer: "Cooler Master",
    model: "E501L",
    type: "ATX",
    price: 40
  },
  {
    manufacturer: "Cooler Master",
    model: "MB600L",
    type: "ATX",
    price: 50
  },
  {
    manufacturer: "Corsair ",
    model: "Carbide 275Q",
    type: "ATX",
    price: 80
  },
  {
    manufacturer: "NZXT",
    model: "H510i",
    type: "ATX",
    price: 100
  },
  {
    manufacturer: "NZXT",
    model: "H510 Elite",
    type: "ATX",
    price: 160
  },
  {
    manufacturer: "Corsair",
    model: "Crystal 570X RGB",
    type: "ATX",
    price: 190
  },
  //---Micro-ATX
  {
    manufacturer: "Cooler Master",
    model: "Q300L",
    type: "Micro-ATX",
    price: 40
  },
  {
    manufacturer: "Cooler Master",
    model: "Silencio 352",
    type: "Micro-ATX",
    price: 60
  },
  {
    manufacturer: "Cooler Master",
    model: "Silencio S400",
    type: "Micro-ATX",
    price: 90
  },
  {
    manufacturer: "Corsair",
    model: "Crystal 280X",
    type: "Micro-ATX",
    price: 110
  },
  {
    manufacturer: "NZXT",
    model: "H400i",
    type: "Micro-ATX",
    price: 140
  },
  {
    manufacturer: "Corsair",
    model: "Crystal 280X RGB",
    type: "Micro-ATX",
    price: 170
  }
];

function getParts(amount) {
  const orderCPU = cpu.sort((a, b) => b.price - a.price);
  const orderGPU = gpu.sort((a, b) => b.price - a.price);
  const orderMboard = motherboard.sort((a, b) => b.price - a.price);
  const orderRAM = ram.sort((a, b) => b.price - a.price);
  const orderStorage = storage.sort((a, b) => b.price - a.price);
  const orderCases = cases.sort((a, b) => b.price - a.price);

  for (let a = 0; a < orderCPU.length; a++) {
    const cpuSelected = orderCPU[a];
    let total = cpuSelected.price;

    for (let b = 0; b < orderGPU.length; b++) {
      const gpuSelected = orderGPU[b];
      total = cpuSelected.price;
      total += gpuSelected.price;

      for (let c = 0; c < orderMboard.length; c++) {
        const motherboardSelected = orderMboard[c];
        total = cpuSelected.price + gpuSelected.price;
        total += motherboardSelected.price;

        for (let d = 0; d < orderRAM.length; d++) {
          const ramSelected = orderRAM[d];
          total =
            cpuSelected.price + gpuSelected.price + motherboardSelected.price;
          total += ramSelected.price;

          for (let e = 0; e < orderStorage.length; e++) {
            const storageSelected = orderStorage[e];
            total =
              cpuSelected.price +
              gpuSelected.price +
              motherboardSelected.price +
              ramSelected.price;
            total += storageSelected.price;

            for (let f = 0; f < orderCases.length; f++) {
              const caseSelected = orderCases[f];
              total =
                cpuSelected.price +
                gpuSelected.price +
                motherboardSelected.price +
                ramSelected.price +
                storageSelected.price;
              total += caseSelected.price;

              if (total <= amount) {
                return {
                  amount: Number(amount),
                  total,
                  options: {
                    cpuSelected,
                    gpuSelected,
                    motherboardSelected,
                    ramSelected,
                    storageSelected,
                    caseSelected
                  }
                };
              }
            }
          }
        }
      }
    }
  }
}

export default getParts;
const fs = require("fs");
        const csv = require("csvtojson");
        const { Parser } = require("json2csv");


        async function myFunction() {
          const cars = create.csv().fromFile("cars.csv");

            // Show the cars
            console.log(cars);

            // Modify the cars
            cars[0].Year = 1998;

            // Saved the cars
            const carsInCsv = new Parser({ fields: [cars[0].Name, cars[1].Name, "Model", "Length"] }).parse(cars);
            fs.writeFileSync("cars.csv", carsInCsv);

        }

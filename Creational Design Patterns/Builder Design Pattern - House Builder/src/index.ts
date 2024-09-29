// src/index.ts
import * as readline from 'readline';
import { HouseBuilder } from './house/HouseBuilder';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const promptUserForHouseDetails = () => {
    const houseBuilder = new HouseBuilder();

    rl.question('Enter number of rooms (or type "end" to finish): ', (roomsInput) => {
        if (roomsInput.toLowerCase() === 'end') {
            console.log('Exiting...');
            rl.close();
            return;
        }

        const rooms = parseInt(roomsInput);
        if (isNaN(rooms) || rooms <= 0) {
            console.log('Error: Please enter a valid positive integer for the number of rooms.');
            return promptUserForHouseDetails();
        }
        
        rl.question('Enter house color: ', (color) => {
            // Validation to check if color is a non-empty string and does not consist solely of numbers
            if (!color.trim() || !isNaN(Number(color))) {
                console.log('Error: Color must be a non-empty string and cannot be a number. Please enter a valid color.');
                return promptUserForHouseDetails();
            }

            rl.question('Does the house have a garden? (yes/no): ', (gardenInput) => {
                const hasGarden = gardenInput.toLowerCase() === 'yes';

                rl.question('Does the house have a garage? (yes/no): ', (garageInput) => {
                    const hasGarage = garageInput.toLowerCase() === 'yes';

                    const house = houseBuilder
                        .setRooms(rooms)
                        .setColor(color)
                        .setGarden(hasGarden)
                        .setGarage(hasGarage)
                        .build();

                    house.showDetails();
                    console.log('------------------------------');
                    promptUserForHouseDetails(); // Prompt again for new house details
                });
            });
        });
    });
};

// Start the prompt
promptUserForHouseDetails();

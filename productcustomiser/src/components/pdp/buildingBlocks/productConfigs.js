const detailedProductDescription = [
    '2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz',
    '16GB 2666MHz DDR4 memory',
    'AMD Radeon Pro 5500M with 4GB of GDDR6 memory',
    '8TB SSD storage',
    '16-inch Retina display with True Tone',
    'Four Thunderbolt 3 ports',
    'Touch Bar and Touch ID',
    'Backlit Magic Keyboard - US English'
];

const processorVariants = [
    {
        variant: 'A',
        description: "2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "2.4GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 5.0GHz",
        additionalAmountRequired: 20000
    },
];

const memoryVariants = [
    {
        variant: 'A',
        description: "16GB 2666MHz DDR4 memory",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "32GB 2666MHz DDR4 memory",
        additionalAmountRequired: 40000
    },
    {
        variant: 'C',
        description: "64GB 2666MHz DDR4 memory",
        additionalAmountRequired: 80000
    },
];

const graphicsVariants = [
    {
        variant: 'A',
        description: "AMD Radeon Pro 5500M with 4GB of GDDR6 memory",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "AMD Radeon Pro 5500M with 8GB of GDDR6 memory",
        additionalAmountRequired: 10000
    },
    {
        variant: 'C',
        description: "AMD Radeon Pro 5600M with 8GB of HBM2 memory",
        additionalAmountRequired: 70000
    },
];

const storageVariants = [
    {
        variant: 'A',
        description: "1TB SSD storage",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "2TB SSD storage",
        additionalAmountRequired: 40000
    },
    {
        variant: 'C',
        description: "4TB SSD storage",
        additionalAmountRequired: 100000
    },
    {
        variant: 'D',
        description: "8TB SSD storage",
        additionalAmountRequired: 220000
    },
];

const finalCutOptions = [
    {
        variant: 'A',
        description: "None",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "Final Cut Pro",
        additionalAmountRequired: 24900
    },
];

const logicProOptions = [
    {
        variant: 'A',
        description: "None",
        additionalAmountRequired: 0,
        selected: true
    },
    {
        variant: 'B',
        description: "Logic Pro",
        additionalAmountRequired: 15500
    },
];


export {
    detailedProductDescription,
    processorVariants,
    memoryVariants,
    graphicsVariants,
    storageVariants,
    finalCutOptions,
    logicProOptions
}

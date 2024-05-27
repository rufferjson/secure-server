const express = require('express');
const router = express.Router();
const Transaction = require('../model/Transactionhistory');


router.get('/transaction',async (req,res) => {
    try {


        const transactions = new Transaction(
            {
                "date": "2024-01-01",
                "amount": 3576.54,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14396769.54,
                "owner": "1234"
            },
            {
                "date": "2024-01-04",
                "amount": 453.21,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14396316.33,
                "owner": "1234"
            },
            {
                "date": "2024-01-07",
                "amount": 1278.90,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14397595.23,
                "owner": "1234"
            },
            {
                "date": "2024-01-10",
                "amount": 1893.75,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14395701.48,
                "owner": "1234"
            },
            {
                "date": "2024-01-13",
                "amount": 986.43,
                "type": "deposit",
                "description": "business",
                "current_balance": 14396687.91,
                "owner": "1234"
            },
            {
                "date": "2024-01-16",
                "amount": 150.00,
                "type": "withdrawal",
                "description": "personal",
                "current_balance": 14396537.91,
                "owner": "1234"
            },
            {
                "date": "2024-01-19",
                "amount": 702.31,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14397240.22,
                "owner": "1234"
            },
            {
                "date": "2024-01-22",
                "amount": 394.75,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14396845.47,
                "owner": "1234"
            },
            {
                "date": "2024-01-25",
                "amount": 839.20,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14397684.67,
                "owner": "1234"
            },
            {
                "date": "2024-01-28",
                "amount": 1065.90,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14396618.77,
                "owner": "1234"
            },
            {
                "date": "2024-01-31",
                "amount": 221.80,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14396840.57,
                "owner": "1234"
            },
            {
                "date": "2024-02-03",
                "amount": 1304.00,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14395536.57,
                "owner": "1234"
            },
            {
                "date": "2024-02-06",
                "amount": 703.90,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14396240.47,
                "owner": "1234"
            },
            {
                "date": "2024-02-09",
                "amount": 642.35,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14395698.12,
                "owner": "1234"
            },
            {
                "date": "2024-02-12",
                "amount": 1009.50,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14396707.62,
                "owner": "1234"
            },
            {
                "date": "2024-02-15",
                "amount": 357.85,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14396349.77,
                "owner": "1234"
            },
            {
                "date": "2024-02-18",
                "amount": 934.20,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14397283.97,
                "owner": "1234"
            },
            {
                "date": "2024-02-21",
                "amount": 402.65,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14396881.32,
                "owner": "1234"
            },
            {
                "date": "2024-02-24",
                "amount": 751.80,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14397633.12,
                "owner": "1234"
            },
            {
                "date": "2024-02-27",
                "amount": 289.50,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14397343.62,
                "owner": "1234"
            },
            {
                "date": "2024-03-01",
                "amount": 1132.50,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14398476.12,
                "owner": "1234"
            },
            {
                "date": "2024-03-04",
                "amount": 470.20,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14398005.92,
                "owner": "1234"
            },
            {
                "date": "2024-03-07",
                "amount": 901.50,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14398907.42,
                "owner": "1234"
            },
            {
                "date": "2024-03-10",
                "amount": 605.20,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14398302.22,
                "owner": "1234"
            },
            {
                "date": "2024-03-13",
                "amount": 1043.70,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14399345.92,
                "owner": "1234"
            },
            {
                "date": "2024-03-16",
                "amount": 209.90,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14399136.02,
                "owner": "1234"
            },
            {
                "date": "2024-03-19",
                "amount": 1207.20,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14400343.22,
                "owner": "1234"
            },
            {
                "date": "2024-03-22",
                "amount": 321.50,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14399921.72,
                "owner": "1234"
            },
            {
                "date": "2024-03-25",
                "amount": 850.00,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14400771.72,
                "owner": "1234"
            },
            {
                "date": "2024-03-28",
                "amount": 471.25,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14400300.47,
                "owner": "1234"
            },
            {
                "date": "2024-03-31",
                "amount": 1303.60,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14401604.07,
                "owner": "1234"
            },
            {
                "date": "2024-04-03",
                "amount": 289.75,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14401314.32,
                "owner": "1234"
            },
            {
                "date": "2024-04-06",
                "amount": 1127.80,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14402442.12,
                "owner": "1234"
            },
            {
                "date": "2024-04-09",
                "amount": 473.20,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14401968.92,
                "owner": "1234"
            },
            {
                "date": "2024-04-12",
                "amount": 1350.30,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14403319.22,
                "owner": "1234"
            },
            {
                "date": "2024-04-15",
                "amount": 201.70,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14403117.52,
                "owner": "1234"
            },
            {
                "date": "2024-04-18",
                "amount": 785.60,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14403803.12,
                "owner": "1234"
            },
            {
                "date": "2024-04-21",
                "amount": 357.80,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14403445.32,
                "owner": "1234"
            },
            {
                "date": "2024-04-24",
                "amount": 1049.90,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14404495.22,
                "owner": "1234"
            },
            {
                "date": "2024-04-27",
                "amount": 212.40,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14404282.82,
                "owner": "1234"
            },
            {
                "date": "2024-04-30",
                "amount": 985.00,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14405267.82,
                "owner": "1234"
            },
            {
                "date": "2024-05-03",
                "amount": 287.30,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14404980.52,
                "owner": "1234"
            },
            {
                "date": "2024-05-06",
                "amount": 1310.50,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14406291.02,
                "owner": "1234"
            },
            {
                "date": "2024-05-09",
                "amount": 592.90,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14405798.12,
                "owner": "1234"
            },
            {
                "date": "2024-05-12",
                "amount": 1407.80,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14407205.92,
                "owner": "1234"
            },
            {
                "date": "2024-05-15",
                "amount": 481.20,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14406724.72,
                "owner": "1234"
            },
            {
                "date": "2024-05-18",
                "amount": 975.30,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14407700.02,
                "owner": "1234"
            },
            {
                "date": "2024-05-21",
                "amount": 383.70,
                "type": "withdrawal",
                "description": "business",
                "current_balance": 14407316.32,
                "owner": "1234"
            },
            {
                "date": "2024-05-24",
                "amount": 1065.00,
                "type": "deposit",
                "description": "personal",
                "current_balance": 14408381.32,
                "owner": "1234"
            }
        );

        await transactions.save();
        res.send({status: 200,});

    } catch (error) {
        console.log({error});                
    }
});




module.exports = router;
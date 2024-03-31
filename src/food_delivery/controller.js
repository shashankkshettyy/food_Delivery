

const pool = require('../db');
const { calculatePrice } = require('../food_delivery/priceCalculationService');

const calculateCost = async (req, res) => {
    const { zone, organization_id, total_distance, item_type } = req.body;

    try {
        const query = {
            text: `SELECT km_price, fix_price 
             FROM Pricing 
             WHERE organization_id = $1 AND zone = $2`,
            values: [organization_id, zone],
        };

        const result = await pool.query(query);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Pricing data not found' });
        }

        const { km_price, fix_price } = result.rows[0];

        let totalCost = calculatePrice(5, km_price, fix_price, total_distance, item_type);

        const totalPriceInEuros = totalCost;

        res.json({ total_price: totalPriceInEuros });
    } catch (error) {
        console.error('Error calculating cost:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { calculateCost };

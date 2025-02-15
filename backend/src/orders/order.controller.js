const Order = require("./order.model");

const createAOrder = async (req, res) => {
    try {
      console.log("Request body:", req.body);
      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      const populatedOrder = await Order.findById(savedOrder._id).populate("productIds");
      res.status(200).json(populatedOrder);      
    } catch (error) {
        console.log("Error creating order", error)
        res.status(200).json({message: "Failed To Create Order"});
    }
}

const getOrderByEmail = async (req, res) => {
    try {
      const {email} = req.params;
      const orders = await Order.find({email}).sort({createdAt: -1});
      if(!orders) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(orders);
    } catch (error) {
      console.error("Error fetching orders", error);
      res.status(500).json({ message: "Failed to fetch order" });
    }
}

module.exports = {
    createAOrder,
    getOrderByEmail
}
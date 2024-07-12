import Product from "../models/productModel";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


export const createProduct = async (req, res) => {
    const { title, desc, img, categories, size, color, price, inStock } = req.body;
    try {
        const product = new Product({
            title,
            desc,
            img,
            categories,
            size,
            color,
            price,
            inStock,
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, desc, img, categories, size, color, price, inStock } = req.body;
    try {
        const product = await Product.findById(id);

        if (product) {
            product.title = title;
            product.desc = desc;
            product.img = img;
            product.categories = categories;
            product.size = size;
            product.color = color;
            product.price = price;
            product.inStock = inStock;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
};


export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);

        if (product) {
            await product.remove();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }

};


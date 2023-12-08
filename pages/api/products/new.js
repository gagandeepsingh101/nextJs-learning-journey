import { ProductModel } from "@/model/product";
import { connectDB } from "@/utils/database";

export default async function handler(req, res) {
	await connectDB();
	if (req.method !== "POST") {
		return res.status(405).json({
			success: false,
			message: "Method not allowed",
		});
	}
	const name = req.body.name,
		price = req.body.price,
		description = req.body.description;
	ProductModel.create({
		name,
		price,
		description,
	});
	res.status(201).json({
		success: true,
		message: "Product created successfully",
	});
}

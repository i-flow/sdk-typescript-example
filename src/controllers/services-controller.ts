import { Request, Response } from "express";
import { IAnyConnectServiceDefinitions } from "../types";

export const servicesController = (req: Request, res: Response) => {
    const services: IAnyConnectServiceDefinitions[] = [
        {
            name: "GetMaterialIdInfo",
            description: "Get data for Material ID from ERP.",
            url: "/service1",
            method: "GET",
            query: [
                {
                    name: "material_id",
                    type: "string",
                    description: "The material id.",
                    example: "MAT_345634"
                }
            ],
            body: []
        },
        {
            name: "UpdateStock",
            description: "Update stock count of material within ERP",
            url: "/service2",
            method: "POST",
            query: [],
            body: [
                {
                    name: "new_stock",
                    type: "number",
                    description: "The new stock of :material_id",
                    example: "125"
                },
                {
                    name: "material_id",
                    type: "string",
                    description: "The material id.",
                    example: "MAT_345634"
                }
            ]
        }
    ];
    res.json({ services });
};

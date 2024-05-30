import { Request, Response } from "express";
import { IAnyConnectServiceDefinitions } from "../types";

export const servicesController = (req: Request, res: Response) => {
    const services: IAnyConnectServiceDefinitions[] = [
        {
            name: "Service 1",
            description: "Description of Service 1",
            url: "/service1",
            method: "GET",
            query: [
                {
                    name: "param1",
                    type: "string",
                    description: "Description of param1",
                    example: "example1"
                }
            ],
            body: []
        },
        {
            name: "Service 2",
            description: "Description of Service 2",
            url: "/service2",
            method: "POST",
            query: [],
            body: [
                {
                    name: "param1",
                    type: "string",
                    description: "Description of param1",
                    example: "example1"
                }
            ]
        }
    ];
    res.json({ services });
};

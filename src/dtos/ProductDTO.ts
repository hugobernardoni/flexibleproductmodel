export interface ProductDTO {
    sku: string;
    name: string;
    customerId: string;
    attributes: { attributeId: string; value: string }[];
}

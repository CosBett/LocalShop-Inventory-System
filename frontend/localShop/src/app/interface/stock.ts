export interface Stock {
    id?: number;
    product_name: string;
    quantity: number;
    created_date: string;
    updated_date: string;
    received_quantity: number;
    payment: ['paid', 'unpaid'];
    spoilt_quantity: number;
}

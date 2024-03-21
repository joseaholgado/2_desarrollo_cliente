export { };

interface Product {
    description: string;
    price: number;
    dto: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
    dto: 0.15
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0,
    dto: 0.10
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];

} function taxCalculation({products, tax}: TaxCalculationOptions): number[] {
    let total = 0;
    products.forEach(({price,dto}) => {
        total += price-(price*dto);
    });
    return [total, total * compra.tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;
const result = taxCalculation({
    products: shoppingCart,
    tax: tax
})
console.log('Total', result[0]);
console.log('Tax', result[1]);

compra.products.forEach(product => {
    total +=producto.price;
}

product.forEach(product => {
    total +=product.price;
}
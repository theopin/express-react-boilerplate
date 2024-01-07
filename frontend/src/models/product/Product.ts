export interface Product {
  _id: string
  name: string
  description?: string
  price: number
  quantity: number
  created_at: string // Assuming you store timestamps as strings for simplicity
}

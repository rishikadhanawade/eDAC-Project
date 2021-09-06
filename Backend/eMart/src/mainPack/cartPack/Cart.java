package mainPack.cartPack;

import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int cartID;
	
	@NotNull
	private int productID;
	
	@NotNull
	private int custid;

	@NotNull
	private int qty;
	
	@NotNull
	private int totalItemCost;
	
	@NotNull
	private int deliveryCharge;
	
	@NotNull
	private int totalDiscount;
	
	@NotNull
	private int totalBill;

	
	public int getProductID() {
		return productID;
	}

	public void setProductID(int productID) {
		this.productID = productID;
	}
	
	public int getCartID() {
		return cartID;
	}

	public void setCartID(int cartID) {
		this.cartID = cartID;
	}
	
	public int getCustid() {
		return custid;
	}

	public void setCustid(int custid) {
		this.custid = custid;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getTotalItemCost() {
		return totalItemCost;
	}

	public void setTotalItemCost(int totalItemCost) {
		this.totalItemCost = totalItemCost;
	}

	public int getDeliveryCharge() {
		return deliveryCharge;
	}

	public void setDeliveryCharge(int deliveryCharge) {
		this.deliveryCharge = deliveryCharge;
	}

	public int getTotalDiscount() {
		return totalDiscount;
	}

	public void setTotalDiscount(int totalDiscount) {
		this.totalDiscount = totalDiscount;
	}

	public int getTotalBill() {
		return totalBill;
	}

	public void setTotalBill(int totalBill) {
		this.totalBill = totalBill;
	}
	
	
	
}

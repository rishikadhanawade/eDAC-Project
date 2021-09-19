package mainPack.invoicePack;

import static javax.persistence.GenerationType.IDENTITY;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import mainPack.orderDetailPack.OrderDtl;

@Entity
public class Invoice {
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int invoiceOrderID;

	@NotNull
	private int productID;
	
	@Column(nullable=true)
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
	

	@OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="invoiceOrderID")
	private List<OrderDtl> orderDtl;
	

	public List<OrderDtl> getOrderDtl() {
		return orderDtl;
	}

	public void setOrderDtl(List<OrderDtl> orderDtl) {
		this.orderDtl = orderDtl;
	}

	public int getInvoiceOrderID() {
		return invoiceOrderID;
	}

	public void setInvoiceOrderID(int invoiceOrderID) {
		this.invoiceOrderID = invoiceOrderID;
	}

	public int getProductID() {
		return productID;
	}

	public void setProductID(int productID) {
		this.productID = productID;
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

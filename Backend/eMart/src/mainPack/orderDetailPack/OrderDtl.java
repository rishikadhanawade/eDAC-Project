package mainPack.orderDetailPack;

import static javax.persistence.GenerationType.IDENTITY;
import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class OrderDtl {

	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int orderDtlID;
	
	@NotNull
	@Column(unique=true)
	private int invoiceOrderID;
	
	private String otherShippingAddr;
	
	@NotNull
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private Date orderDate;
	
	@NotNull
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private Date deliveryDate;

	public int getOrderDtlID() {
		return orderDtlID;
	}

	public void setOrderDtlID(int orderDtlID) {
		this.orderDtlID = orderDtlID;
	}

	public int getInvoiceOrderID() {
		return invoiceOrderID;
	}

	public void setInvoiceOrderID(int invoiceOrderID) {
		this.invoiceOrderID = invoiceOrderID;
	}

	public String getOtherShippingAddr() {
		return otherShippingAddr;
	}

	public void setOtherShippingAddr(String otherShippingAddr) {
		this.otherShippingAddr = otherShippingAddr;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Date getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}
	
	
}

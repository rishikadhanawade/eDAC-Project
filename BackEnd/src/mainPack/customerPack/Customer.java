package mainPack.customerPack;

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
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import mainPack.invoicePack.Invoice;
import mainPack.cartPack.Cart;

@Entity
public class Customer 
{
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int custid;
	
	@NotNull
	private String cust_Name;
	
	@NotNull
	private String cust_Address;
	
	@NotNull
	private long cust_PhoneNo;
	
	@NotNull
	private String cust_Password;
	
	@Column(nullable=false,unique=true)
	private String cust_Email_ID;
	
	private int eMCardNo;
	private int eMartPoints;
	
	@OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="custID")
	private List<Invoice> Invoice;
	
	@OneToOne(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="custid")
	private Cart cart;
	
	public Cart getCart() {
		return cart;
	}
	public void setCart(Cart cart) {
		this.cart = cart;
	}
	
	public List<Invoice> getInvoice() {
		return Invoice;
	}
	
	public void setInvoice(List<Invoice> Invoice) {
		this.Invoice = Invoice;
	}
		
	public int getCustid() {
		return custid;
	}
	public void setCustid(int custid) {
		this.custid = custid;
	}
	
	public String getCust_Name() {
		return cust_Name;
	}
	public void setCust_Name(String cust_Name) {
		this.cust_Name = cust_Name;
	}
	
	
	public String getCust_Address() {
		return cust_Address;
	}
	public void setCust_Address(String cust_Address) {
		this.cust_Address = cust_Address;
	}
	
	public long getCust_PhoneNo() {
		return cust_PhoneNo;
	}
	public void setCust_PhoneNo(long cust_PhoneNo) {
		this.cust_PhoneNo = cust_PhoneNo;
	}
	
	public String getCust_Password() {
		return cust_Password;
	}
	public void setCust_Password(String cust_Password) {
		this.cust_Password = cust_Password;
	}
	
	public String getCust_Email_ID() {
		return cust_Email_ID;
	}
	public void setCust_Email_ID(String cust_Email_ID) {
		this.cust_Email_ID = cust_Email_ID;
	}
	public int geteMCardNo() {
		return eMCardNo;
	}
	public void seteMCardNo(int eMCardNo) {
		this.eMCardNo = eMCardNo;
	}
	public int geteMartPoints() {
		return eMartPoints;
	}
	public void seteMartPoints(int eMartPoints) {
		this.eMartPoints = eMartPoints;
	}
	

}

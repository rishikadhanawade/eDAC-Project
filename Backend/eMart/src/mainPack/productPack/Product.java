package mainPack.productPack;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.beans.factory.annotation.Value;

import mainPack.cartPack.Cart;
import mainPack.configDetailPack.Config_details;
import mainPack.invoicePack.Invoice;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int prodID;
	
	@NotNull
	private String prodName;
	
	@NotNull
	private int catmasterID;
	
	@NotNull
	private String prodShortDesc;
	
	@NotNull
	private int mrpPrice;
	
	private int offerPrice;
	
	@NotNull
	private int cardholdersPrice;
	
	private int pointsToBeRedm;
	
	@NotNull
	private String productImagePath;
	
	@NotNull
	private int qtyOfInventory;
	
	@ColumnDefault("1")
	private int qty;
	
	@Column(nullable=true)
	private int offerId;
	
	
	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}
	
	@OneToMany(cascade=CascadeType.ALL)
	@LazyCollection(LazyCollectionOption.FALSE)
	@JoinColumn(name="product_id")
	private List<Config_details> config_details;

	@OneToMany(cascade=CascadeType.ALL)
	@LazyCollection(LazyCollectionOption.FALSE)
	@JoinColumn(name="productID")
	private List<Invoice> invoice;
	
	@OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="productID")
	private List<Cart> Cart;
	
	
	public List<Cart> getCart() {
		return Cart;
	}

	public void setCart(List<Cart> cart) {
		Cart = cart;
	}

	public List<Invoice> getInvoice() {
		return invoice;
	}

	public void setInvoice(List<Invoice> invoice) {
		this.invoice = invoice;
	}

	public int getProdID() {
		return prodID;
	}

	public void setProdID(int prodID) {
		this.prodID = prodID;
	}

	public int getCatmasterID() {
		return catmasterID;
	}

	public void setCatmasterID(int catmasterID) {
		this.catmasterID = catmasterID;
	}

	public String getProdShortDesc() {
		return prodShortDesc;
	}

	public void setProdShortDesc(String prodShortDesc) {
		this.prodShortDesc = prodShortDesc;
	}

	public int getMrpPrice() {
		return mrpPrice;
	}

	public void setMrpPrice(int mrpPrice) {
		this.mrpPrice = mrpPrice;
	}

	public int getOfferPrice() {
		return offerPrice;
	}

	public void setOfferPrice(int offerPrice) {
		this.offerPrice = offerPrice;
	}

	public int getCardholdersPrice() {
		return cardholdersPrice;
	}

	public void setCardholdersPrice(int cardholdersPrice) {
		this.cardholdersPrice = cardholdersPrice;
	}

	public int getPointsToBeRedm() {
		return pointsToBeRedm;
	}

	public void setPointsToBeRedm(int pointsToBeRedm) {
		this.pointsToBeRedm = pointsToBeRedm;
	}

	public String getProductImagePath() {
		return productImagePath;
	}

	public void setProductImagePath(String productImagePath) {
		this.productImagePath = productImagePath;
	}

	public int getQtyOfInventory() {
		return qtyOfInventory;
	}

	public void setQtyOfInventory(int qtyOfInventory) {
		this.qtyOfInventory = qtyOfInventory;
	}

	public int getOfferId() {
		return offerId;
	}

	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}


	public List<Config_details> getConfig_details() {
		return config_details;
	}

	public void setConfig_details(List<Config_details> config_details) {
		this.config_details = config_details;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}
	
	
	
}
	

	
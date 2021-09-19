package mainPack.offersPack;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import java.util.List;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import mainPack.productPack.Product;

@Entity
public class Offer 
{
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int offerID;
	
	@NotNull
	private int offerPercent;

	@OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="offerId")
	private List<Product> Product;
	
	public List<Product> getProduct() {
		return Product;
	}
	
	public void setProduct(List<Product> product) {
		Product = product;
	}
	
	public int getOfferID() {
		return offerID;
	}

	public void setOfferID(int offerID) {
		this.offerID = offerID;
	}
	
	public int getOfferPercent() {
		return offerPercent;
	}

	public void setOfferPercent(int offerPercent) {
		this.offerPercent = offerPercent;
	}

	
}
package mainPack.categoryPack;


import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import mainPack.productPack.Product;

@Entity
public class Category
{
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int catmasterID;
	
	private String categoryName;  

	private String subCat;	
	
	private String subCatName;
	
	@NotNull
	private String subCatProduct;
	
	@NotNull
	private String catImagePath;
	
	@OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="catmasterID")
	private List<Product> Product;

	public String getSubCat() {
		return subCat;
	}

	public void setSubCat(String subCat) {
		this.subCat = subCat;
	}

	public String getSubCatName() {
		return subCatName;
	}

	public void setSubCatName(String subCatName) {
		this.subCatName = subCatName;
	}

	public String getSubCatProduct() {
		return subCatProduct;
	}

	public void setSubCatProduct(String subCatProduct) {
		this.subCatProduct = subCatProduct;
	}

	public String getCatImagePath() {
		return catImagePath;
	}

	public void setCatImagePath(String catImagePath) {
		this.catImagePath = catImagePath;
	}

	public List<Product> getProduct() {
		return Product;
	}

	public void setProduct(List<Product> product) {
		Product = product;
	}
	
	public String getCategoryName() {
		return categoryName;
	}

	
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	
	public void setCatmasterID(int catmasterID) {
		this.catmasterID = catmasterID;
	}
	
	public int getCatmasterID() {
		return catmasterID;
	}

}
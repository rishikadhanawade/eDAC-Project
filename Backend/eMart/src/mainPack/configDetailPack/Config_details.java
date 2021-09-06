package mainPack.configDetailPack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Config_details {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int config_detail_id;
	@NotNull
	private int config_id;
	@NotNull
	private String product_details;
	@NotNull
	private int product_id;
	
	
	public int getConfig_detail_id() {
		return config_detail_id;
	}
	public int getConfig_id() {
		return config_id;
	}
	public String getproduct_details() {
		return product_details;
	}
	public int getProduct_id() {
		return product_id;
	}
	
	
	public void setConfig_detail_id(int config_detail_id) {
		this.config_detail_id = config_detail_id;
	}
	public void setConfig_id(int config_id) {
		this.config_id = config_id;
	}
	public void setproduct_details(String product_details) {
		this.product_details = product_details;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	
}

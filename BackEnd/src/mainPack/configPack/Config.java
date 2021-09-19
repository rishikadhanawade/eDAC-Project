package mainPack.configPack;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import mainPack.configDetailPack.Config_details;
import static javax.persistence.GenerationType.IDENTITY;
import java.util.List;
import javax.persistence.CascadeType;



@Entity
public class Config {

	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int configID;
	
	@NotNull
	private String configName;
	
	
	
	@OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="config_id")
	private List<Config_details> Config_details;
	
	public int getConfigID() {
		return configID;
	}
	public void setConfigID(int configID) {
		this.configID = configID;
	}
	public String getConfigName() {
		return configName;
	}
	public void setConfigName(String configName) {
		this.configName = configName;
	}
	
}

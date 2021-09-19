package mainPack.storePack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Store {
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int storeID;
	@NotNull
	private String storeAddr;
	@NotNull
	private long storePhn;

	
	public int getStoreID() {
		return storeID;
	}

	public void setStoreID(int storeID) {
		this.storeID = storeID;
	}

	
	public String getStoreAddr() {
		return storeAddr;
	}

	public void setStoreAddr(String storeAddr) {
		this.storeAddr = storeAddr;
	}

	
	public long getStorePhn() {
		return storePhn;
	}

	public void setStorePhn(long storePhn) {
		this.storePhn = storePhn;
	}

}
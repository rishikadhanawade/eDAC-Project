package mainPack.storePack;

import java.util.List;

public interface StoreManager
{
	void addStore(Store s);
	List<Store> getStores();
	void delete(int sid);
	void update(Store store,int sid);
	Store getStore(int sid);
}

package mainPack.storePack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoreManagerImpl implements StoreManager
{
	@Autowired
	StoreRepository repository;

	@Override
	public void addStore(Store p) {
		repository.save(p);
	}

	@Override
	public List<Store> getStores() {
		return repository.findAll();
	}

	@Override
	public void delete(int sid) {
		repository.deleteById(sid);
	}

	@Override
	public void update(Store s,int sid) {
		repository.update(s.getStoreAddr(),s.getStorePhn(),sid);
		
	}

	@Override
	public Store getStore(int sid) {
		return repository.findById(sid);
	}
}

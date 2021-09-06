package mainPack.configPack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class ConfigServiceImpl implements ConfigService{
	@Autowired
	ConfigRepository repository;

	@Override
	public void addConfig(Config p) {
		repository.save(p);
	}

	@Override
	public List<Config> getConfig() {
		return repository.findAll();
	}

	@Override
	public void delete(int cid) {
		repository.deleteChildConfigDetailById(cid);
		repository.deleteById(cid);
		
	}

	@Override
	public void update(Config c, int cid) {
		repository.update(c.getConfigName(),cid);
	}

	@Override
	public Config getConfig(int cid) {
		return repository.findById(cid);
	}

}

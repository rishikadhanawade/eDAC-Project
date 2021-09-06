package mainPack.configDetailPack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Config_details_ManagerImpl implements Config_details_Manager {

	@Autowired
	Config_details_Repository cdr;
	
	@Override
	public void add_Config_detail(Config_details cd) {
			cdr.save(cd);
	}

	@Override
	public List<Config_details> getAll_Config_details() {
		return cdr.findAll();
	}

	@Override
	public void delete_config_details(int id) {	
			cdr.deleteById(id);
	}

	@Override
	public void update_config_details(Config_details cd, int id) {
		cdr.update(cd.getProduct_id(), cd.getproduct_details(),  cd.getConfig_id(), id);
		
	}

	@Override
	public Config_details get_config_details_ById(int id) {
		return cdr.findById(id);
	}

	@Override
	public List<String> getProdDetailsById(int id) {
		return cdr.findProdDetailsById(id);
	}
}

package mainPack.configDetailPack;

import java.util.List;

public interface Config_details_Manager {
		public void add_Config_detail(Config_details cd);
		public List<Config_details> getAll_Config_details();
		public void delete_config_details(int id);
		public void update_config_details(Config_details cd, int id);
		public Config_details get_config_details_ById(int id);
		public List<String> getProdDetailsById(int id);
}

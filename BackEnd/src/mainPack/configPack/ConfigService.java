package mainPack.configPack;

import java.util.List;

public interface ConfigService {

	void addConfig(Config c);
	List<Config> getConfig();
	void delete(int cid);
	void update(Config config,int cid);
	Config getConfig(int cid);

}

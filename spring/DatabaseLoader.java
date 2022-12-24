package com.example.blockchain.blockchain;

public class DatabaseLoader implements CommandLineRunner {

	private final UsersRepository repository;

	@Autowired
	public DatabaseLoader(UsersRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		System.out.print("start");
		// this.repository.save(new User("Jose", "jose@gmail.com", "joses"));
	}

}
package com.example.blockchain.blockchain;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import com.example.blockchain.blockchain.models.User;
import com.example.blockchain.blockchain.models.UsersRepository;

@SpringBootApplication
public class BlockchainApplication implements CommandLineRunner {

	private final UsersRepository repository;

	@Autowired
	public BlockchainApplication(UsersRepository repository) {
		this.repository = repository;
	}

	@Autowired
	private ApplicationContext context;

	public static void main(String[] args) {
		SpringApplication.run(BlockchainApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.print("start");
		RequestMappingHandlerMapping requestMappingHandlerMapping = context
				.getBean("requestMappingHandlerMapping", RequestMappingHandlerMapping.class);
		Map<RequestMappingInfo, HandlerMethod> map = requestMappingHandlerMapping
				.getHandlerMethods();
		map.forEach((key, value) -> System.out.println(key.getName() + "" + value.toString()));
		// this.repository.save(new User("Jose", "jose@gmail.com", "joses"));

		/*
		 * String sql =
		 * "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)";
		 * 
		 * int result = jdbcTemplate.update(sql, "Ravi Kumar", "ravi.kumar@gmail.com",
		 * "ravi2021");
		 * 
		 * if (result > 0) {
		 * System.out.println("A new row has been inserted.");
		 * }
		 */

	}
}

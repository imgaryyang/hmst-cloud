package com.syscloud.provider;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * Created by Administrator on 2018/6/21 0021.
 */
@EnableEurekaClient
@SpringBootApplication
public class HmstCloudCoreApplication {
    public static void main(String[] args) {
        SpringApplication.run(HmstCloudCoreApplication.class, args);
    }
}

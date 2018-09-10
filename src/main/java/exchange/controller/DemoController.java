package exchange.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import exchange.model.MyWebSocketMessage;

@RestController
@RequestMapping("/demo")
public class DemoController {
	
	static Map<String, Object> defaultHeaders = null;
	static {
		defaultHeaders = new HashMap<String, Object>();
		defaultHeaders.put(MessageHeaders.CONTENT_TYPE, MimeTypeUtils.APPLICATION_JSON);
	}	

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	
	@RequestMapping(value = "/doSomething/{something}", method = RequestMethod.GET)
	public void doSomething(@PathVariable String something) {
		
		CompletableFuture.runAsync(() -> {
			
			//Slow processing
			try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}).thenRun(() -> {
			
			MyWebSocketMessage message = new MyWebSocketMessage();
			message.setCode(1);
			message.setMessage("OK" + something);
			simpMessagingTemplate.convertAndSend("/topic/notification", message, defaultHeaders);

		});

		
	}


}

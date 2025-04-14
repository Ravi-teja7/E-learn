document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    const lessonId = parseInt(urlParams.get('lesson')) || 1; // Default to 1 if invalid

    const courseData = {
        'java-full-stack': {
            topics: [
                { id: 1, notes: `
                    <h3>Introduction to Java</h3>
                    <p>Java is a high-level, object-oriented, platform-independent language developed by Sun Microsystems in 1995. It follows the "Write Once, Run Anywhere" (WORA) principle due to the Java Virtual Machine (JVM), which compiles bytecode to run on any device with a JVM installed. This makes Java ideal for cross-platform applications, from web servers to Android apps.</p>
                    <h3>Key Concepts</h3>
                    <p><strong>Variables:</strong> Store data using types like <code>int x = 10</code> (integer) or <code>String name = "John"</code> (text). Variables must be declared with a type before use.</p>
                    <p><strong>Data Types:</strong> Includes primitive types (int, double, char, boolean) and reference types (String, arrays, objects). Primitive types are stored directly, while reference types point to memory locations.</p>
                    <p><strong>Basic Syntax:</strong> A simple program looks like <code>public class Hello { public static void main(String[] args) { System.out.println("Hello World"); } }</code>. The <code>main</code> method is the entry point.</p>
                    <p><strong>Execution Process:</strong> Compile source code with <code>javac Hello.java</code> to generate <code>Hello.class</code>, then run with <code>java Hello</code>. This two-step process ensures portability.</p>
                    <p>Additionally, Java’s robust standard library (Java API) provides tools for file handling, networking, and more, making it a versatile choice for developers. Learning Java basics opens doors to advanced topics like multithreading and enterprise applications.</p>
                ` },
                { id: 2, notes: `
                    <h3>Object-Oriented Programming (OOP)</h3>
                    <p>Object-Oriented Programming (OOP) is a paradigm that uses objects and classes to design applications. Introduced in Java, OOP promotes modularity and reusability, forming the backbone of modern software development. It’s widely used in frameworks like Spring.</p>
                    <h3>Core Concepts</h3>
                    <p><strong>Classes:</strong> Blueprints for objects, e.g., <code>class Car { String model; int year; }</code>. Define properties and behaviors here.</p>
                    <p><strong>Objects:</strong> Instances created from classes, e.g., <code>Car myCar = new Car();</code>. Objects hold specific data.</p>
                    <p><strong>Inheritance:</strong> Allows a class to inherit properties from another using <code>extends</code>, e.g., <code>class SportsCar extends Car</code>. Supports code reuse.</p>
                    <p><strong>Polymorphism:</strong> Enables methods to have multiple forms, like method overriding (e.g., <code>class Vehicle { void drive() {}} class Car extends Vehicle { void drive() { System.out.println("Car driving"); }}</code>).</p>
                    <p><strong>Encapsulation:</strong> Protects data with <code>private</code> fields and provides access via public methods, e.g., <code>private String name; public String getName() { return name; }</code>.</p>
                    <p>Understanding OOP helps in designing scalable systems. Java’s strict implementation ensures type safety and encourages best practices like the Single Responsibility Principle, which is critical in large-scale projects.</p>
                ` },
                { id: 3, notes: `
                    <h3>Java Collections Framework</h3>
                    <p>The Java Collections Framework (JCF) provides a unified architecture for representing and manipulating groups of objects. Introduced in Java 1.2, it’s part of the <code>java.util</code> package and is essential for efficient data handling in Java applications.</p>
                    <h3>Key Interfaces</h3>
                    <p><strong>ArrayList:</strong> A resizable array implementation, e.g., <code>List<String> list = new ArrayList<>(); list.add("Item"); list.get(0);</code>. Ideal for dynamic sizes.</p>
                    <p><strong>HashMap:</strong> Stores key-value pairs with fast lookups, e.g., <code>Map<String, Integer> map = new HashMap<>(); map.put("One", 1); map.get("One");</code>.</p>
                    <p><strong>Set:</strong> Ensures uniqueness, e.g., <code>Set<String> set = new HashSet<>(); set.add("Unique"); set.add("Unique"); // only one "Unique" stored</code>.</p>
                    <p><strong>Usage:</strong> Collections are used for tasks like sorting (<code>Collections.sort(list)</code>) and iteration (<code>for (String item : list)</code>). They replace older array-based approaches with better performance and flexibility.</p>
                    <p>The JCF also includes interfaces like <code>List</code>, <code>Set</code>, and <code>Map</code>, with implementations like <code>LinkedList</code> and <code>TreeMap</code> for specific needs. Mastering collections is key for handling large datasets in Java applications.</p>
                ` },
                { id: 4, notes: `
                    <h3>Spring Boot Introduction</h3>
                    <p>Spring Boot is an extension of the Spring framework that simplifies the development of production-ready Java applications. Released in 2014, it reduces boilerplate code with auto-configuration and an embedded server (e.g., Tomcat).</p>
                    <h3>Setup</h3>
                    <p><strong>Entry Point:</strong> <code>@SpringBootApplication public class App { public static void main(String[] args) { SpringApplication.run(App.class, args); } }</code>. This single line boots the app.</p>
                    <p><strong>Controllers:</strong> Define REST endpoints with <code>@RestController</code>, e.g., <code>@GetMapping("/hello") public String sayHello() { return "Hello"; }</code>.</p>
                    <p><strong>Features:</strong> Auto-configures Spring MVC, JPA, and security. Includes starters for web, data, and more, downloadable via Maven or Gradle.</p>
                    <p>Spring Boot is widely used for microservices and enterprise apps due to its ease of use and extensive ecosystem. It supports rapid prototyping and deployment, making it a favorite among developers building scalable systems.</p>
                ` },
                { id: 5, notes: `
                    <h3>REST APIs with Spring</h3>
                    <p>Representational State Transfer (REST) APIs allow communication between client and server using HTTP methods. Spring provides robust tools to build these APIs efficiently.</p>
                    <h3>Key Annotations</h3>
                    <p><strong>@GetMapping:</strong> Handle GET requests, e.g., <code>@GetMapping("/api/data") public String get() { return "Data"; }</code>. Retrieves resources.</p>
                    <p><strong>@PostMapping:</strong> Handle POST requests with <code>@RequestBody</code>, e.g., <code>@PostMapping("/api") public ResponseEntity save(@RequestBody Data data) { ... }</code>.</p>
                    <p><strong>Response:</strong> Use <code>ResponseEntity</code> for custom status and body, e.g., <code>return ResponseEntity.ok(data);</code> or <code>return ResponseEntity.badRequest().build();</code>.</p>
                    <p>REST APIs are stateless and use JSON/XML for data exchange. Spring’s support for HATEOAS and validation (<code>@Valid</code>) enhances API design, making it suitable for modern web applications.</p>
                ` },
                { id: 6, notes: `
                    <h3>Hibernate Basics</h3>
                    <p>Hibernate is a popular Object-Relational Mapping (ORM) tool that maps Java objects to database tables, reducing manual SQL coding. It’s part of the Java Persistence API (JPA).</p>
                    <h3>Configuration</h3>
                    <p><strong>@Entity:</strong> Annotate a class to make it persistable, e.g., <code>@Entity public class User { ... }</code>.</p>
                    <p><strong>@Id:</strong> Define the primary key, e.g., <code>@Id private int id;</code>.</p>
                    <p><strong>Operations:</strong> Use <code>entityManager.persist(object)</code> to save, <code>entityManager.find(User.class, id)</code> to retrieve.</p>
                    <p>Hibernate handles transactions and caching, improving performance. It supports relationships (one-to-many, many-to-one) with annotations like <code>@OneToMany</code>, making database interactions more object-oriented.</p>
                ` },
                { id: 7, notes: `
                    <h3>Maven Build Tool</h3>
                    <p>Maven is a build automation tool for Java projects, managing dependencies, compilation, and packaging. Introduced by Apache, it uses a Project Object Model (POM) file.</p>
                    <h3>Usage</h3>
                    <p><strong>pom.xml:</strong> Define dependencies, e.g., <code><dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-web</artifactId></dependency></code>.</p>
                    <p><strong>Commands:</strong> <code>mvn clean</code> removes build artifacts, <code>mvn install</code> builds and installs to local repository.</p>
                    <p>Maven’s lifecycle (clean, compile, test, package) streamlines development. It also supports plugins for tasks like generating documentation, making it essential for large projects.</p>
                ` },
                { id: 8, notes: `
                    <h3>Front-End with JSP</h3>
                    <p>JavaServer Pages (JSP) allows embedding Java code in HTML to create dynamic web content. It’s an extension of Servlet technology, popular in early Java web development.</p>
                    <h3>Features</h3>
                    <p><strong>Scriptlets:</strong> Use <code><% %> </code> for Java code, e.g., <code><%= new java.util.Date() %></code> displays the current date.</p>
                    <p><strong>Directives:</strong> <code><%@ page language="java" %></code> sets page properties.</p>
                    <p><strong>Separation:</strong> Combines presentation (HTML) and logic (Java), though modern frameworks like Thymeleaf are preferred today.</p>
                    <p>JSP supports custom tags and expression language (EL) for cleaner code. It’s still used in legacy systems but is being replaced by more modular front-end solutions.</p>
                ` },
                { id: 9, notes: `
                    <h3>Database Integration with JDBC</h3>
                    <p>Java Database Connectivity (JDBC) is an API that enables Java applications to interact with databases like MySQL or PostgreSQL. It’s part of the Java Standard Edition.</p>
                    <h3>Steps</h3>
                    <p><strong>Connection:</strong> <code>Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/db", "user", "pass");</code>.</p>
                    <p><strong>Statement:</strong> Use <code>Statement stmt = conn.createStatement();</code> or <code>PreparedStatement</code> for parameterized queries.</p>
                    <p><strong>ResultSet:</strong> Retrieve data with <code>ResultSet rs = stmt.executeQuery("SELECT * FROM table"); while(rs.next()) { ... }</code>.</p>
                    <p>JDBC requires manual resource management (e.g., closing connections), but it offers fine-grained control. Modern apps often use ORM like Hibernate for simplicity.</p>
                ` },
                { id: 10, notes: `
                    <h3>Deployment to Tomcat</h3>
                    <p>Apache Tomcat is an open-source servlet container used to deploy Java web applications. It supports JSP and Servlets, making it a go-to for Java developers.</p>
                    <h3>Process</h3>
                    <p><strong>.war File:</strong> Package the app with <code>mvn package</code> to generate a Web Archive (.war) file.</p>
                    <p><strong>Deployment:</strong> Copy the .war to Tomcat’s <code>webapps</code> folder; it auto-deploys on startup.</p>
                    <p><strong>Config:</strong> Edit <code>conf/server.xml</code> to set context paths, e.g., <code><Context path="/myapp" docBase="myapp"/></code>.</p>
                    <p>Tomcat supports clustering and load balancing for scalability. Monitoring tools like Manager App help manage deployments in production environments.</p>
                ` }
            ]
        },
        'python': {
            topics: [
                { id: 1, notes: `
                    <h3>Introduction to Python</h3>
                    <p>Python is an interpreted, high-level, general-purpose programming language created by Guido van Rossum in 1991. Known for its readability and simplicity, it’s widely used in web development, data science, automation, and more. Installation is straightforward via python.org or package managers like Homebrew.</p>
                    <h3>Basics</h3>
                    <p><strong>Syntax:</strong> Uses indentation (4 spaces) instead of braces, e.g., <code>if True: print("Yes")</code>.</p>
                    <p><strong>Execution:</strong> Run scripts with <code>python script.py</code> or use an IDE like PyCharm.</p>
                    <p><strong>Output:</strong> Use <code>print("Hello")</code> to display text. Python’s dynamic typing reduces boilerplate code.</p>
                    <p>Python’s extensive standard library and third-party packages (e.g., via pip) make it versatile. It’s an excellent choice for beginners and experts alike, with a strong community supporting its growth.</p>
                ` },
                { id: 2, notes: `
                    <h3>Variables and Data Types</h3>
                    <p>Variables in Python store data without explicit type declaration due to dynamic typing. This flexibility speeds up development but requires careful management to avoid type-related errors.</p>
                    <h3>Types</h3>
                    <p><strong>Int:</strong> Whole numbers, e.g., <code>x = 5</code>. No size limit beyond system memory.</p>
                    <p><strong>Float:</strong> Decimal numbers, e.g., <code>y = 3.14</code>. Use <code>float()</code> for conversion.</p>
                    <p><strong>String:</strong> Text data, e.g., <code>text = "Hello"</code>. Supports methods like <code>upper()</code>.</p>
                    <p><strong>Boolean:</strong> True/False values, e.g., <code>isTrue = True</code>. Used in conditionals.</p>
                    <p>Python also supports complex numbers (<code>complex(1, 2)</code>) and NoneType (<code>None</code>) for null values. Type checking with <code>type()</code> helps debug code effectively.</p>
                ` },
                { id: 3, notes: `
                    <h3>Control Flow</h3>
                    <p>Control flow structures dictate the order of execution in Python programs. They are essential for decision-making and looping through data, making code more dynamic.</p>
                    <h3>Structures</h3>
                    <p><strong>If-Else:</strong> <code>if x > 0: print("Positive") else: print("Negative")</code>. Supports <code>elif</code> for multiple conditions.</p>
                    <p><strong>For Loop:</strong> Iterate over sequences, e.g., <code>for i in range(5): print(i)</code>. Use with lists or ranges.</p>
                    <p><strong>While Loop:</strong> Repeat while a condition is true, e.g., <code>while x < 10: x += 1</code>. Include break to exit early.</p>
                    <p>Control flow can be enhanced with <code>continue</code> to skip iterations and <code>pass</code> as a placeholder. These constructs are critical for algorithms and data processing tasks.</p>
                ` },
                { id: 4, notes: `
                    <h3>Functions</h3>
                    <p>Functions are reusable blocks of code defined with <code>def</code>, promoting modularity and reducing redundancy in Python programs.</p>
                    <h3>Examples</h3>
                    <p><strong>Simple Function:</strong> <code>def greet(): print("Hi")</code>. Call with <code>greet()</code>.</p>
                    <p><strong>With Params:</strong> <code>def add(a, b): return a + b</code>. Returns <code>7</code> for <code>add(3, 4)</code>.</p>
                    <p><strong>Default Args:</strong> <code>def power(x, n=2): return x ** n</code>. Defaults to square if <code>n</code> omitted.</p>
                    <p>Functions can have variable arguments (<code>*args</code>, <code>**kwargs</code>) and docstrings for documentation. They’re foundational for building libraries and scripts.</p>
                ` },
                { id: 5, notes: `
                    <h3>Lists and Tuples</h3>
                    <p>Lists and tuples are sequence types in Python for storing multiple items. Lists are mutable, while tuples are immutable, offering different use cases.</p>
                    <h3>Usage</h3>
                    <p><strong>List:</strong> <code>myList = [1, 2, 3]; myList.append(4)</code>. Supports <code>remove()</code> and <code>pop()</code>.</p>
                    <p><strong>Tuple:</strong> <code>myTuple = (1, 2, 3); # immutable</code>. Use for fixed data like coordinates.</p>
                    <p><strong>Methods:</strong> <code>list.pop(index)</code> removes and returns an item; <code>tuple.count(item)</code> counts occurrences.</p>
                    <p>Lists are ideal for data manipulation, while tuples are memory-efficient for read-only data. Both support slicing (e.g., <code>myList[1:3]</code>).</p>
                ` },
                { id: 6, notes: `
                    <h3>Dictionaries</h3>
                    <p>Dictionaries are unordered collections of key-value pairs, providing fast lookups and flexible data storage in Python.</p>
                    <h3>Operations</h3>
                    <p><strong>Creation:</strong> <code>dict = {"name": "John", "age": 25}</code>. Keys must be immutable (e.g., strings, numbers).</p>
                    <p><strong>Access:</strong> <code>print(dict["name"])</code> retrieves "John". Use <code>get()</code> for safe access.</p>
                    <p><strong>Update:</strong> <code>dict["age"] = 26</code> modifies values; <code>dict.update({"city": "NY"})</code> adds multiple.</p>
                    <p>Dictionaries are hash-table based, ensuring O(1) average-time complexity for lookups. They’re widely used in data processing and configuration management.</p>
                ` },
                { id: 7, notes: `
                    <h3>File Handling</h3>
                    <p>File handling in Python allows reading from and writing to files, essential for data persistence and I/O operations.</p>
                    <h3>Methods</h3>
                    <p><strong>Read:</strong> <code>with open("file.txt", "r") as f: print(f.read())</code>. Use <code>readlines()</code> for line-by-line reading.</p>
                    <p><strong>Write:</strong> <code>with open("file.txt", "w") as f: f.write("Text")</code>. Overwrites existing content.</p>
                    <p><strong>Append:</strong> Use <code>"a"</code> mode, e.g., <code>with open("file.txt", "a") as f: f.write("New Line\n")</code>.</p>
                    <p>The <code>with</code> statement ensures files close automatically, preventing resource leaks. Binary modes (<code>"rb"</code>, <code>"wb"</code>) handle non-text files like images.</p>
                ` },
                { id: 8, notes: `
                    <h3>Object-Oriented Programming (OOP)</h3>
                    <p>Python supports OOP, allowing developers to model real-world entities using classes and objects. This paradigm enhances code organization and reuse.</p>
                    <h3>Implementation</h3>
                    <p><strong>Class:</strong> <code>class Dog: def __init__(self, name): self.name = name</code>. The <code>__init__</code> is the constructor.</p>
                    <p><strong>Object:</strong> <code>myDog = Dog("Buddy")</code>. Access with <code>myDog.name</code>.</p>
                    <p><strong>Inheritance:</strong> <code>class Puppy(Dog): def bark(self): print("Woof")</code>. Inherits <code>Dog</code> properties.</p>
                    <p>OOP in Python includes abstraction (using <code>@abstractmethod</code>) and polymorphism. It’s widely used in frameworks like Django for structured development.</p>
                ` },
                { id: 9, notes: `
                    <h3>Modules and Packages</h3>
                    <p>Modules and packages organize Python code into reusable units, improving maintainability and scalability of projects.</p>
                    <h3>Usage</h3>
                    <p><strong>Import:</strong> <code>import math; print(math.pi)</code>. Access module functions directly.</p>
                    <p><strong>Package:</strong> A directory with <code>__init__.py</code>, e.g., <code>from mypackage import mymodule</code>. Supports hierarchical organization.</p>
                    <p>Modules can be custom (e.g., <code>my_module.py</code>) or built-in (e.g., <code>os</code>, <code>sys</code>). Packages enable large-scale applications with clear namespace management.</p>
                ` },
                { id: 10, notes: `
                    <h3>Exception Handling</h3>
                    <p>Exception handling manages runtime errors, ensuring programs don’t crash unexpectedly. Python’s try-except blocks are intuitive and powerful.</p>
                    <h3>Examples</h3>
                    <p><strong>Try-Except:</strong> <code>try: x = 1/0 except ZeroDivisionError: print("Cannot divide by zero")</code>. Catches specific exceptions.</p>
                    <p><strong>Finally:</strong> <code>finally: print("Done")</code>. Executes regardless of exception.</p>
                    <p>Custom exceptions can be defined with <code>raise</code> and <code>class CustomError(Exception)</code>. This is crucial for robust application development.</p>
                ` }
            ]
        },
        'data-science': {
            topics: [
                { id: 1, notes: `
                    <h3>Introduction to Data Science</h3>
                    <p>Data Science is an interdisciplinary field that extracts actionable insights from raw data using scientific methods, algorithms, and systems. It combines statistics, programming, and domain expertise to solve complex problems across industries like finance, healthcare, and marketing.</p>
                    <h3>Applications</h3>
                    <p><strong>Machine Learning:</strong> Predictive modeling to forecast trends (e.g., stock prices).</p>
                    <p><strong>Artificial Intelligence:</strong> Powers chatbots and autonomous systems.</p>
                    <p><strong>Business Analytics:</strong> Optimizes operations with data-driven decisions.</p>
                    <p>The process involves data collection, cleaning, analysis, and visualization. Tools like Python and R dominate due to their extensive libraries, making data science accessible to professionals and hobbyists alike.</p>
                ` },
                { id: 2, notes: `
                    <h3>Python for Data Science</h3>
                    <p>Python has become the lingua franca of data science due to its simplicity and rich ecosystem of libraries. It’s used for everything from data manipulation to advanced machine learning.</p>
                    <h3>Libraries</h3>
                    <p><strong>NumPy:</strong> Handles numerical computations with arrays.</p>
                    <p><strong>Pandas:</strong> Manages tabular data with DataFrames.</p>
                    <p><strong>Matplotlib:</strong> Creates visualizations like plots and charts.</p>
                    <p>Python’s open-source nature and community support (e.g., Stack Overflow, GitHub) make it ideal. It also integrates with big data tools like Apache Spark, enhancing its scalability.</p>
                ` },
                { id: 3, notes: `
                    <h3>NumPy Basics</h3>
                    <p>NumPy (Numerical Python) is the foundation for numerical computing in Python, providing support for large, multi-dimensional arrays and matrices with optimized performance.</p>
                    <h3>Operations</h3>
                    <p><strong>Array Creation:</strong> <code>np.array([1, 2, 3])</code> or <code>np.zeros((2, 3))</code> for zeros matrix.</p>
                    <p><strong>Functions:</strong> <code>np.mean(array)</code> for average, <code>np.sum(array)</code> for total.</p>
                    <p>NumPy’s vectorized operations (e.g., <code>array * 2</code>) avoid explicit loops, boosting speed. It’s a prerequisite for libraries like Pandas and SciPy.</p>
                ` },
                { id: 4, notes: `
                    <h3>Pandas Introduction</h3>
                    <p>Pandas is a powerful library for data manipulation and analysis, built on NumPy. It introduces DataFrames and Series, mimicking spreadsheet-like functionality.</p>
                    <h3>Usage</h3>
                    <p><strong>Creation:</strong> <code>pd.DataFrame({'col': [1, 2]})</code> or from CSV with <code>pd.read_csv("file.csv")</code>.</p>
                    <p><strong>Methods:</strong> <code>df.head()</code> shows top rows, <code>df.describe()</code> gives statistics.</p>
                    <p>Pandas excels at handling missing data and time series. It’s widely used in data preprocessing for machine learning pipelines.</p>
                ` },
                { id: 5, notes: `
                    <h3>Data Visualization</h3>
                    <p>Data visualization transforms data into graphical representations, aiding in pattern recognition and decision-making. Python offers robust tools for this purpose.</p>
                    <h3>Tools</h3>
                    <p><strong>Matplotlib:</strong> <code>plt.plot(x, y)</code> for line plots, customizable with labels and titles.</p>
                    <p><strong>Seaborn:</strong> Builds on Matplotlib with statistical plots like heatmaps and box plots.</p>
                    <p>Visualization enhances storytelling with data, making complex datasets accessible. Interactive plots with Plotly or Bokeh add further value in presentations.</p>
                ` },
                { id: 6, notes: `
                    <h3>Data Cleaning</h3>
                    <p>Data cleaning prepares raw data for analysis by addressing inconsistencies, missing values, and duplicates. It’s a critical step in the data science workflow.</p>
                    <h3>Techniques</h3>
                    <p><strong>Missing Data:</strong> <code>df.dropna()</code> removes rows with NaN, <code>df.fillna(0)</code> replaces with zero.</p>
                    <p><strong>Duplicates:</strong> <code>df.drop_duplicates()</code> eliminates redundant entries.</p>
                    <p>Cleaning improves model accuracy and prevents bias. Techniques like outlier detection and normalization are also applied, often using libraries like SciPy.</p>
                ` },
                { id: 7, notes: `
                    <h3>Machine Learning Introduction</h3>
                    <p>Machine Learning (ML) enables systems to learn from data and improve over time without explicit programming. It’s a subset of artificial intelligence with growing applications.</p>
                    <h3>Types</h3>
                    <p><strong>Supervised:</strong> Uses labeled data (e.g., regression predicts house prices).</p>
                    <p><strong>Unsupervised:</strong> Finds patterns in unlabeled data (e.g., clustering customers).</p>
                    <p>ML algorithms like decision trees and neural networks drive innovations in self-driving cars and recommendation systems, requiring strong data foundations.</p>
                ` },
                { id: 8, notes: `
                    <h3>Scikit-Learn</h3>
                    <p>Scikit-Learn is a machine learning library in Python, offering simple and efficient tools for data mining and analysis. It’s built on NumPy, SciPy, and matplotlib.</p>
                    <h3>Examples</h3>
                    <p><strong>Regression:</strong> <code>from sklearn.linear_model import LinearRegression; model = LinearRegression()</code>.</p>
                    <p><strong>Fit:</strong> <code>model.fit(X, y)</code> trains the model; <code>model.predict(X_new)</code> predicts.</p>
                    <p>Scikit-Learn includes preprocessing (e.g., <code>StandardScaler</code>) and model evaluation (e.g., <code>cross_val_score</code>), making it a go-to for ML beginners and experts.</p>
                ` },
                { id: 9, notes: `
                    <h3>Deep Learning</h3>
                    <p>Deep Learning, a subset of ML, uses neural networks with many layers to model complex patterns. It powers advances in image recognition and natural language processing.</p>
                    <h3>Frameworks</h3>
                    <p><strong>TensorFlow:</strong> <code>model.add(Dense(10))</code> adds a layer; supports GPU acceleration.</p>
                    <p><strong>Keras:</strong> High-level API on TensorFlow, e.g., <code>model.compile(optimizer='adam', loss='mse')</code>.</p>
                    <p>Deep learning requires large datasets and computational power, often using cloud platforms like Google Colab for training models.</p>
                ` },
                { id: 10, notes: `
                    <h3>Data Science Projects</h3>
                    <p>Data science projects apply skills to real-world problems, from predictive analytics to data dashboards. They showcase a full workflow from data to insights.</p>
                    <h3>Steps</h3>
                    <p><strong>Data Collection:</strong> Use APIs (e.g., Twitter API) or datasets (Kaggle).</p>
                    <p><strong>Analysis:</strong> Apply ML techniques like regression or clustering.</p>
                    <p>Projects often involve collaboration and version control (e.g., Git). Presenting results with visualizations or reports is key to success.</p>
                ` }
            ]
        },
        'web-dev': {
            topics: [
                { id: 1, notes: `
                    <h3>HTML Basics</h3>
                    <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. Introduced in 1990 by Tim Berners-Lee, it structures content with tags, forming the backbone of the internet.</p>
                    <h3>Structure</h3>
                    <p><strong>Tags:</strong> <code><html></code> encloses the document, <code><head></code> contains metadata, <code><body></code> holds content.</p>
                    <p><strong>Elements:</strong> <code><p></code> for paragraphs, <code><div></code> for sections, <code><img src="image.jpg"></code> for images.</p>
                    <p>HTML5 introduced semantic tags (<code><article></code>, <code><section></code>) and multimedia support (<code><video></code>, <code><audio></code>), enhancing accessibility and structure.</p>
                ` },
                { id: 2, notes: `
                    <h3>CSS Basics</h3>
                    <p>CSS (Cascading Style Sheets) controls the presentation of HTML documents, defining colors, layouts, and fonts. It was introduced to separate content from design.</p>
                    <h3>Properties</h3>
                    <p><strong>Color:</strong> <code>p { color: blue; }</code> sets text color.</p>
                    <p><strong>Margin:</strong> <code>margin: 10px;</code> adds space outside elements.</p>
                    <p><strong>Selectors:</strong> <code>.class</code> for groups, <code>#id</code> for unique elements.</p>
                    <p>CSS3 added features like animations and flexbox, improving responsiveness. External stylesheets (<code><link rel="stylesheet" href="styles.css"></code>) are common for scalability.</p>
                ` },
                { id: 3, notes: `
                    <h3>JavaScript Introduction</h3>
                    <p>JavaScript is a dynamic scripting language that adds interactivity to web pages. Developed by Netscape in 1995, it’s now a core technology of the web alongside HTML and CSS.</p>
                    <h3>Basics</h3>
                    <p><strong>Output:</strong> <code>document.getElementById("id").innerHTML = "Text";</code> updates HTML.</p>
                    <p><strong>Variables:</strong> <code>let x = 5;</code> (block-scoped) or <code>var x = 5;</code> (function-scoped).</p>
                    <p>Modern JavaScript (ES6+) includes arrow functions and modules, enhancing code modularity. It’s executed client-side but can also run server-side with Node.js.</p>
                ` },
                { id: 4, notes: `
                    <h3>DOM Manipulation</h3>
                    <p>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It allows JavaScript to dynamically modify page content.</p>
                    <h3>Methods</h3>
                    <p><strong>Query:</strong> <code>document.querySelector(".class")</code> selects elements.</p>
                    <p><strong>Change:</strong> <code>element.textContent = "New Text";</code> updates text.</p>
                    <p>The DOM tree represents elements as nodes, enabling actions like adding (<code>appendChild</code>) or removing (<code>removeChild</code>) elements. It’s crucial for interactive web apps.</p>
                ` },
                { id: 5, notes: `
                    <h3>Responsive Design</h3>
                    <p>Responsive design ensures web pages adapt to various screen sizes, from desktops to mobile devices. It’s a cornerstone of modern web development.</p>
                    <h3>Techniques</h3>
                    <p><strong>Media Queries:</strong> <code>@media (max-width: 600px) { body { font-size: 14px; } }</code> adjusts styles.</p>
                    <p><strong>Units:</strong> Use <code>%</code> for relative sizing, <code>vw</code> for viewport width.</p>
                    <p>Frameworks like Bootstrap and CSS Grid enhance responsiveness. Testing with tools like Chrome DevTools ensures compatibility across devices.</p>
                ` },
                { id: 6, notes: `
                    <h3>CSS Flexbox</h3>
                    <p>Flexbox (Flexible Box Layout) is a CSS module for one-dimensional layouts, aligning items efficiently within a container. Introduced in CSS3, it’s widely adopted.</p>
                    <h3>Properties</h3>
                    <p><strong>Display:</strong> <code>display: flex;</code> on the container.</p>
                    <p><strong>Justify:</strong> <code>justify-content: space-between;</code> distributes space.</p>
                    <p>Flexbox handles alignment (e.g., <code>align-items</code>) and order (<code>order</code>). It’s ideal for navigation bars and card layouts.</p>
                ` },
                { id: 7, notes: `
                    <h3>JavaScript Events</h3>
                    <p>Events are actions or occurrences (e.g., clicks, keypresses) that JavaScript can respond to, enabling interactive web experiences.</p>
                    <h3>Examples</h3>
                    <p><strong>Click:</strong> <code>element.addEventListener("click", function() { alert("Clicked"); });</code> triggers on click.</p>
                    <p><strong>Keypress:</strong> <code>document.addEventListener("keypress", function(e) { console.log(e.key); });</code> logs key presses.</p>
                    <p>Event delegation and preventDefault() enhance control. Events are foundational for forms, menus, and dynamic UI updates.</p>
                ` },
                { id: 8, notes: `
                    <h3>Bootstrap Introduction</h3>
                    <p>Bootstrap is an open-source CSS framework that simplifies responsive web design. Released by Twitter in 2011, it’s now maintained by a community.</p>
                    <h3>Components</h3>
                    <p><strong>Grid:</strong> <code><div class="container"><div class="row"><div class="col"></div></div></div></code> creates layouts.</p>
                    <p><strong>Buttons:</strong> <code><button class="btn btn-primary"></button></code> adds styled buttons.</p>
                    <p>Bootstrap includes prebuilt components (e.g., navbars, modals) and JavaScript plugins. Its CDN delivery speeds up development.</p>
                ` },
                { id: 9, notes: `
                    <h3>Form Handling</h3>
                    <p>Form handling manages user input, validating and processing data submitted via web forms. It’s critical for user interaction.</p>
                    <h3>Techniques</h3>
                    <p><strong>HTML5:</strong> <code><input type="text" required></code> enforces input.</p>
                    <p><strong>JS:</strong> Validate with <code>form.checkValidity()</code> or custom logic.</p>
                    <p>Server-side validation (e.g., with PHP or Node.js) complements client-side checks. Forms often integrate with APIs for data submission.</p>
                ` },
                { id: 10, notes: `
                    <h3>Project Setup</h3>
                    <p>Setting up a web project involves creating a complete site, such as a portfolio, from scratch. It integrates HTML, CSS, and JavaScript skills.</p>
                    <h3>Steps</h3>
                    <p><strong>HTML:</strong> Structure with <code><header></code>, <code><main></code>, <code><footer></code> sections.</p>
                    <p><strong>CSS:</strong> Style with a custom stylesheet, e.g., <code>styles.css</code>.</p>
                    <p><strong>JS:</strong> Add interactivity, e.g., form submission with <code>fetch</code>.</p>
                    <p>Projects benefit from version control (Git) and hosting on platforms like GitHub Pages or Netlify for public access.</p>
                ` }
            ]
        }
    };

    const course = courseData[courseId] || courseData['web-dev'];
    const topic = course.topics.find(t => t.id === lessonId) || { title: 'Unknown Lesson', notes: '<p>Notes are not available for this lesson. Please select a valid lesson.</p>' };
    document.getElementById('notes-title').textContent = `${course.title} - Lesson ${lessonId}: ${topic.title}`;
    document.getElementById('notes-text').innerHTML = topic.notes;
});
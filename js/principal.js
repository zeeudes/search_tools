$(document).ready(function () {

  function ferramenta(nome, subarea, website, arigos, tipo_projeto, linguagem_programacao, mantenedores, tipo_licenca, integracao, plataforma, paradigma) {

    this.nome = nome;
    this.subarea = subarea;
    this.website = website;
    this.arigos = arigos;
    this.tipo_projeto = tipo_projeto;
    this.linguagem_programacao = linguagem_programacao;
    this.mantenedores = mantenedores;
    this.tipo_licenca = tipo_licenca;
    this.integracao = integracao;
    this.plataforma = plataforma;
    this.paradigma = paradigma;

  }

  var ferramentas = [];
  ferramentas.push(new ferramenta("Jira", ["Gerenciamento de backlog", "Rastreamento de bugs", "Comunicação e Feedback"], "https://www.atlassian.com/software/jira", [2, 5], "Privado", ["Indiferente"], "Atlassian", "Paga", ["Bitbucket", "Git", "Bamboo", "Teamcity"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Confluence", ["Gerenciamento de backlog", "Comunicação e feedback"], "http://www.atlassian.com/software/confluence", [2], "Privado", ["Indiferente"], "Atlassian", "Paga", ["Jira", "Teamcity"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Github", ["Gerenciamento de Backlog", "Rastreamento de bugs", "Controle de versão", "Revisão de código", "Comunicação e Feedback"], "https://github.com/", [2, 4, 50], "Privado", ["Indiferente"], "Github", "Gratis", ["Git"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Agilefant", ["Gerenciamento de backlog"], "http://www.agilefant.com/", [2], "Privado", ["Indiferente"], "Agilefant LTDA", "Paga", ["Trello", "Jira"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Google Docs", ["Gerenciamento de backlog"], "https://www.google.com/docs/about/", [2], "Privado", ["Indiferente"], "Google", "Gratis", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Excel", ["Gerenciamento de backlog"], "https://products.office.com/en-us/excel", [2], "Privado", ["Indiferente"], "Microsoft", "Paga", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Accept360", ["Gerenciamento de backlog"], "http://www.accept360.com/", [2], "Privado", ["Indiferente"], "Accept Software", "Paga", ["Confluence"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Kanbanik", ["Gerenciamento de backlog"], "http://kanbanik.github.io/kanbanik/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Xcode", ["IDE"], "https://developer.apple.com/xcode/", [""], "Privado", ["Swift", "Objective C"], "Apple", "Gratis", ["Não informado"], ["Desktop(Mac)", "Mobile(IOS)"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Android Studio", ["IDE"], "https://developer.android.com/studio/index.html?hl=pt-br", [], "Privado", ["Mobile(Android)"], "Jetbrains", "Gratis", ["Jira", "Github", "Bugzilla", "Git", "SVN", "Bitbucket", "Mercurial", "Perforce", "Jenkins", "Maven", "Ant", "Clang", "Sbt", "Teamcity", "Bamboo", "Docker", "Puppet", "Leiningen", "Selenium", "Robot Framework", "Cucumber", "Sonar", "Findbugs", "Checkstyle", "Cppcheck", "Gerrit", "Slack"], ["Mobile(Android)"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Eclipse", ["IDE"], "http://www.eclipse.org/", [8, 12, 50], "Open Source", ["C", "C++", "C#", "Java", "Python", "Java Play", "Ruby", "Javascript", "PHP", "Groovy", "Scala", "Clojure"], "Comunidade", "Gratis", ["Jira", "Github", "Git", "Subversion", "Bitbucket", "Mercurial", "TFS", "Perforce", "Jenkins", "Maven", "Ant", "Cmake", "Make", "Grunt", "Bamboo", "Hudson", "Vagrant", "Docker", "Junit", "Mockito", "Jasmine", "Gcov", "Selenium", "PhantomJS", "Cucumber", "TestNG", "Squish", "Sonar", "FindBugs", "EMMA", "Checkstyle", "Cppcheck", "Testdroid", "Slack", "Sharepoint"], ["Desktop", "Web", "Microsserviços"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Bugzilla", ["Rastreamento de bugs", "Revisão de código"], "https://www.bugzilla.org/", [2], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Eclipse", "SVN", "Git"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Git", ["Controle de versão", "Implantação"], "https://git-scm.com/", [2, 3, 5, 7, 8, 26, 49, 50], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Eclipse", "Jira", "Bugzilla", "Crucible", "Cppcheck", "Github", "Jenkins"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Bitbucket", ["Rastreamento de bugs", "Controle de versão", "Comunicação e Feedback"], "https://bitbucket.org/", [26], "Privado", ["Qualquer"], "Atlassian", "Gratis", ["Jira", "Bamboo", "Hipchat"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("SVN", ["Controle de versão"], "https://subversion.apache.org/", [2, 26, 50], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Jenkins", "Eclipse", "Crucible", "Mercurial", "Cppcheck", "Bugzilla"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("TFS", ["Controle de versão", "Comunicação e Feedback"], "https://www.visualstudio.com/tfs/", [3], "Privado", ["Qualquer"], "Microsoft", "Gratis", ["Jenkins", "Eclipse", "Ndepend", "Squish"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Mercurial", ["Controle de versão"], "https://www.mercurial-scm.org/", [2], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Bugzilla", "Maven", "Capistrano", "Jenkins", "Hudson", "Git", "SVN", "Ant", "MSBuild"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Perforce", ["Controle de versão"], "https://www.perforce.com/", [2, 3], "Privado", ["Qualquer"], "Perforce", "Paga", ["Jira", "Jenkins", "Eclipse"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Jenkins", ["Construção", "Integração Contínua", "Repositório de artefatos", "Implantação", "Qualidade e performance"], "https://jenkins.io/", [2, 3, 5, 8, 26, 39, 49, 50], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Jira", "Confluece", "Github", "Xcode", "Bugzilla", "Git", "SVN", "Bitbucket", "TFS", "Maven", "Nant", "MSBuild", "Ant", "Cmake", "Clang", "Ruby on Rails", "Sbt", "Bamboo", "Airfactory", "Vagrant", "Docker", "Virtualbox", "vSphere", "Chef", "Capistrano", "Nunit", "Junit", "Leiningen", "Slenium", "Robot", "BrowserStack", "Cucumber", "TestNG", "Sonar", "JsLint", "Valgrind", "FindBugs", "EMMA", "Checkstyle", "Cppcheck", "Testsdroid", "New Relic", "JMeter", "Gatling", "Gerrit", "Skype", "Slack", "Flowdock", "Hipchat", "Google Analytics", "Pagerduty", "Twitter"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Maven", ["Construção", "Repositório de artefatos"], "https://maven.apache.org/", [2, 26], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Jenkins", "Mercurial", "Eclipse", "Squish", "EMMA", "Findbugs"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Nant", ["Construção"], "http://nant.sourceforge.net/", [26], "Open Source", [".Net"], "Comunidade", "Gratis", ["Jenkins"], ["Desktop", "Web", "Microsserviços"], ["Imperrativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("MSBuild", ["Construção"], "https://github.com/Microsoft/msbuild", [26], "Open Source", [".Net"], "Comunidade", "Gratis", ["Mercurial", "Jenkins"], ["Desktop", "Web", "Microsserviços"], ["Imperrativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Ant", ["Construção"], "http://ant.apache.org/", [2, 3, 8, 26], "Open Source", ["Java"], "Comunidade", "Gratis", ["Squish", "Eclipse", "Jenkins", "Mercurial"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("CMake", ["Construção"], "https://cmake.org/", [2], "Open Source", ["C", "C++"], "Comunidade", "Gratis", ["Eclipse", "Jenkins"], ["Desktop"], ["Imperrativo, Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Make", ["Construção"], "https://www.gnu.org/software/make/", [2, 26], "Open Source", ["C", "C++"], "Comunidade", "Gratis", ["Eclipse"], ["Desktop"], ["Imperrativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("GCC", ["Construção"], "https://gcc.gnu.org/", [2], "Open Source", ["C", "C++", "Objective C"], "Comunidade", "Gratis", ["Não informado"], ["Desktop", "Mobile(IOS)"], ["Imperrativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Clang", ["Construção", "Qualidade de performance"], "http://clang.llvm.org/", [2], "Open Source", ["C", "C++", "Objective C"], "Comunidade", "Gratis", ["Jenkins"], ["Desktop", "Mobile(IOS)"], ["Imperrativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Ruby on Rails", ["Construção"], "http://rubyonrails.org/", [2], "Open Source", ["Ruby on Raills"], "Comunidade", "Gratis", ["Jenkins"], ["Web"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Sbt", ["Construção"], "http://www.scala-sbt.org/", [2], "Open Source", ["Scala", "Java Play"], "Comunidade", "Gratis", ["Checkstyle", "Jenkins"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos", "Funcional"]));
  ferramentas.push(new ferramenta("Grunt", ["Construção"], "http://gruntjs.com/", [2], "Open Source", ["Javascript"], "Comunidade", "Gratis", ["Eclipse"], ["Web"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("TeamCity", ["Integração Contínua"], "https://www.jetbrains.com/teamcity/", [2, 26, 49], "Privado", ["Qualquer"], "Jetbrains", "Paga", ["Jira", "Confluence", "Ansible", "Puppet", "Squish"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Bamboo", ["Integração Contínua"], "https://br.atlassian.com/software/bamboo", [26, 49], "Privado", ["Qualquer"], "Atlassian", "Paga", ["Jira", "Bitbucket", "Eclipse", "Fisheye", "Jenkins", "Puppet", "Squish"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("CruiseControl", ["Integração Contínua"], "http://cruisecontrol.sourceforge.net/", [26], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Ndepend", "Squish"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Hudson", ["Integração Contínua"], "https://eclipse.org/hudson/", [26], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Cppcheck", "Eclipse", "Squish", "Puppet", "Mercurial"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Buildbot", ["Integração Contínua"], "http://buildbot.net/", [2], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Não informado"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Artifactory", ["Repositório de artefatos"], "https://www.jfrog.com/artifactory/", [2], "Privado", ["Qualquer"], "Jfrog", "Paga", ["Não informado"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Vagrant", ["Orquestração"], "https://www.vagrantup.com/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["vSphere", "Virtualbox", "Rackspace", "Ansible", "Chef", "Puppet", "Foreman"], ["Todos"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Docker", ["Provisionamento de ambientes", "Orquestração"], "https://www.docker.com/", [3, 7, 11], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Docker"], ["Todos"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Virtualbox", ["Provisionamento de ambientes"], "https://www.virtualbox.org/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Ansible", "Puppet", "Jenkins", "Vagrant"], ["Desktop", "Mobile(Android)", "Web", "Microsserviços"], ["Indiferente"]));
  ferramentas.push(new ferramenta("vSphere", ["Provisionamento de ambientes"], "https://www.vmware.com/products/vsphere", [2], "Privado", ["Indiferente"], "Vmware", "Paga", ["Puppet", "Jenkins", "Foreman", "Vagrant"], ["Desktop", "Mobile(Android)", "Web", "Microsserviços"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Ansible", ["Provisionamento de ambientes", "Orquestração", "Implantação"], "https://www.ansible.com/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Docker", "Github", "Bitbucket", "Vagrant", "Jenkins", "Teamcity", "Virtualbox", "vSphere", "Foreman"], ["Desktop", "Mobile(Android)", "Web", "Microsserviços"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Trello", ["Geranciamento de backlog"], "https://trello.com/", [2, 5], "Privado", ["Indiferente"], "Atlassian", "Gratis", ["Slack", "Github", "Jira", "Twitter", "Bitbucket"], ["indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Chef", ["Provisionamento de ambientes", "Implantação"], "https://www.chef.io/", [2, 5, 7, 11], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Github", "Flowdock", "Hipchat", "Slack", "Twitter"], ["Desktop", "Mobile(Android)", "Web", "Microsserviços"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Puppet", ["Provisionamento de ambientes"], "https://puppet.com/", [2, 12, 26], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Jenkins", "Teamcity", "Bamboo", "hudson", "Buildbot", "Virtualbox", "vSphere", "Docker", "Vagrant", "Foreman"], ["Desktop", "Mobile(Android)", "Web", "Microsserviços"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Foreman", ["Orquestração"], "http://theforeman.org/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Slack", "Docker", "Ansible", "Chef", "Puppet", "Jenkins", "Slack", "vSphere", "Github"], ["Desktop", "Mobile(Android)", "Web", "Microsserviços"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Capistrano", ["Implantação"], "http://capistranorb.com/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Slack", "Hipchat"], ["Todos"], ["Indiferente"]));
  ferramentas.push(new ferramenta("HockeyApp", ["Implantação"], "https://www.hockeyapp.net/features/", [2], "Privado", ["Indiferente"], "Microsoft", "Paga", ["Jenkins"], ["Mobile"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Nunit", ["Teste de unidade"], "https://nunit.org/", [26], "Open Source", ["C", "C++", "C#"], "Comunidade", "Gratis", ["Jenkins"], ["Desktop", "Web", "Microsserviços"], ["Imperrativo, Orientação a Objetos"]));
  ferramentas.push(new ferramenta("JUnit", ["Teste de unidade", "Teste de aceitação"], "http://junit.org/", [2, 3, 8], "Open Source", ["Java"], "Comunidade", "Gratis", ["Jenkins", "Eclipse"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Mockito", ["Teste de unidade"], "http://mockito.org/", [2], "Open Source", ["Java"], "Comunidade", "Gratis", ["Eclipse"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Jasmine", ["Teste de unidade", "Teste de interface do usuário"], "http://jasmine.github.io/", [2], "Open Source", ["Javascript"], "Comunidade", "Gratis", ["Eclipse"], ["Web"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Mocha", ["Teste de unidade"], "https://mochajs.org/", [2], "Open Source", ["Javascript"], "Comunidade", "Gratis", ["Não informado"], ["Web"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Leiningen", ["Teste de unidade"], "http://leiningen.org/", [2], "Open Source", ["Clojure"], "Comunidade", "Gratis", ["Jenkins"], ["Desktop", "Web", "Microsserviços"], ["Funcional"]));
  ferramentas.push(new ferramenta("Midje", ["Teste de unidade"], "https://github.com/marick/Midje", [2], "Open Source", ["Clojure"], "Comunidade", "Gratis", ["Não informado"], ["Desktop", "Web", "Microsserviços"], ["Funcional"]));
  ferramentas.push(new ferramenta("Google Test", ["Teste de unidade"], "https://github.com/google/googletest", [2], "Open Source", ["C++"], "Comunidade", "Gratis", ["Não informado"], ["Desktop"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Gcov", ["Teste de unidade"], "https://gcc.gnu.org/onlinedocs/gcc/Gcov.html", [2, 26], "Open Source", ["C", "C++", "Objective C"], "Comunidade", "Gratis", ["Eclipse"], ["Desktop, Mobile(IOS)"], ["Imperrativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Qt Autotest", ["Teste de unidade"], "https://wiki.qt.io/Qt_Autotest_Environment", [2], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Não informado"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Specs2", ["Teste de unidade"], "https://etorreborre.github.io/specs2/", [2], "Open Source", ["Scala", "Java Play"], "Comunidade", "Gratis", ["Não informado"], ["Desktop, Web, Microsserviços"], ["Orientação a Objetos", "Funcional"]));
  ferramentas.push(new ferramenta("Scalatest", ["Teste de unidade"], "http://www.scalatest.org/", [2], "Open Source", ["Scala"], "Comunidade", "Gratis", ["Não informado"], ["Desktop, Web, Microsserviços"], ["Funcional"]));
  ferramentas.push(new ferramenta("Rspec", ["Teste de unidade"], "http://rspec.info/", [2], "Open Sourc", ["Ruby"], "Comunidade", "Gratis", ["Capybara"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Minitest", ["Teste de unidade"], "https://github.com/seattlerb/minitest", [2], "Open Source", ["Ruby"], "Comunidade", "Gratis", ["Capybara"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Selenium", ["Teste de interface do usuário", "Teste de aceitação", "Qualidade e performance"], "http://www.seleniumhq.org/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Eclipse", "Capybara"], ["Web"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Robot Framework", ["Teste de interface do usuário", "Teste de aceitação", "Qualidade e performance"], "http://robotframework.org/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Jenkins"], ["Web"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Twitter", ["Comunicação e Feedback"], "https://twitter.com/", [2], "Privado", ["Indiferente"], "Twitter", "Gratis", ["Trello", "Jenkins", "Chef"], ["Indiferente"], [""]));
  ferramentas.push(new ferramenta("Karma", ["Teste de Interface do usuário"], "https://karma-runner.github.io/", [2], "Open Source", ["Javascript"], "Comunidade", "Gratis", ["Não informado"], ["Web"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("PhantomJS", ["Teste de Interface do usuário"], "http://phantomjs.org/", [2], "Open Source", ["Javascript"], "Comunidade", "Gratis", ["Eclipse"], ["Web"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("BrowserStack", ["Teste de Interface do usuário"], "https://www.browserstack.com/", [2], "Privado", ["Indiferente"], "BrowserStack", "Paga", ["Jenkins"], ["Web"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Capybara", ["Teste de Interface do usuário"], "https://github.com/teamcapybara/capybara", [2], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Cucumber", "Rspec", "Minitest", "Selenium"], ["Web"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Cucumber", ["Teste de interface do usuário", "Teste de aceitação"], "https://cucumber.io/", [2], "Open Source", ["C", "C++", "C#", "Java", "Ruby", "Groovy", "Javascript", "Clojure", "PHP", "Python"], "Comunidade", "Gratis", ["Jenkins", "Eclipse", "Capybara"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos, Funcional	"]));
  ferramentas.push(new ferramenta("Chai", ["Teste de aceitação"], "http://chaijs.com/", [2], "Open Source", ["Javascript"], "Comunidade", "Gratis", ["Não informado"], ["Web"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("TestNG", ["Teste de aceitação"], "http://testng.org/", [2], "Open Source", ["Java"], "Comunidade", "Gratis", ["Jenkins", "Eclipse"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Squish", ["Teste de aceitação", "Qualidade e performance"], "https://www.froglogic.com/squish/gui-testing/", [2], "Privado", ["Qualquer"], "FrogLogic", "Paga", ["TFS", "Cruisecontrol", "Jenkins", "Hudson", "Bamboo", "Teamcity", "Ant", "Maven"], ["Web"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Sonar", ["Qualidade e performance", "Revisão de código"], "http://www.sonarqube.org/", [2, 26], "Privado", ["Qualquer"], "Sonarqube", "Gratis", ["Eclipse", "Checkstyle", "Pagerduty", "Jenkins"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("JsHint", ["Revisão de código"], "http://jshint.com/", [2], "Open Source", ["Javascript"], "Comunidade", "Gratis", ["Eclipse"], ["Web"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Ndepend", ["Qualidade e performance", "Revisão de código"], "http://www.ndepend.com/", [26], "Privado", ["C", "C++", "C#"], "ZEN PROGRAM LTD", "Paga", ["TFS", "Cruisecontrol", "Sonar", "Jenkins"], ["Desktop", "Web", "Microsserviços"], ["Imperrativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("JsLint", ["Revisão de código"], "http://www.jslint.com/", [2], "Open Source", ["Javascript"], "Comunidade", "Gratis", ["Jenkins"], ["Web"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Valgrind", ["Qualidade e performance"], "http://valgrind.org/", [2], "Open Source", ["Indiferente"], "Comunidade", "Gratis", ["Indiferente"], ["Todos"], ["Indiferente"]));
  ferramentas.push(new ferramenta("FindBugs", ["Revisão de código"], "http://findbugs.sourceforge.net/", [3, 8], "Open Source", ["Java"], "Comunidade", "Gratis", ["Eclipse", "Maven"], ["Desktop, Web, Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("EMMA", ["Qualidade e performance"], "http://emma.sourceforge.net/", [3], "Open Source", ["Java"], "Comunidade", "Gratis", ["Eclipse", "Maven"], ["Desktop", "Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Checkstyle", ["Revisão de código"], "http://checkstyle.sourceforge.net/", [3, 8], "Open Source", ["Java"], "Comunidade", "Gratis", ["Bitbucket", "Eclipse", "Gradle", "Jenkins", "Sonar", "Sbt"], ["Desktop", "Android", "Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Flexelint", ["Revisão de código"], "http://www.gimpel.com/html/lintfaq.htm", [26], "Privado", ["C", "C++"], "Gimpel Software", "Paga", ["Eclipse"], ["Desktop"], ["Imperrativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Cppcheck", ["Qualidade e performance"], "http://cppcheck.sourceforge.net/", [2], "Open Source", ["C", "C++"], "Comunidade", "Gratis", ["Hudson", "Jenkins", "Mercurial", "SVN", "Git"], ["Desktop"], ["Imperativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Bullseye", ["Qualidade e performance"], "http://www.bullseye.com/", [2], "Privado", ["C", "C++"], "Bullseye", "Paga", ["Não informado"], ["Desktop"], ["Imperativo", "Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Testdroid", ["Qualidade e performance"], "http://testdroid.com/", [2], "Privado", ["Objective C, Java"], "bitbar", "Paga", ["Jenkins", "Jira"], ["Mobile(Android), Mobile(IOS)"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("New Relic", ["Qualidade e performance"], "https://newrelic.com/", [2, 5], "Privado", ["Java", "Ruby", "Python", "Javascript"], "KingHost", "Paga", ["Jenkins"], ["Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Flowdock", ["Comunicação e Feedback"], "https://www.flowdock.com/", [2], "Open Source", ["Java"], "Comunidade", "Gratis", ["Jenkins"], ["Web", "Microsserviços"], ["Orientação a Objetos"]));
  ferramentas.push(new ferramenta("Slack", ["Comunicação e Feedback"], "https://slack.com/", [2], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Não informado"], ["Web", "Microsserviços"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Skype", ["Comunicação e Feedback"], "https://www.skype.com/", [2], "Privado", ["Qualquer"], "Royal Pingdom", "Paga", ["Slack"], ["Web", "Microsserviços"], ["Qualquer"]));
  ferramentas.push(new ferramenta("FishEye", ["Revisão de código"], "https://www.atlassian.com/software/fisheye", [2], "Privado", ["Qualquer"], "Gatling", "Paga", ["Jenkins"], ["Web", "Microsserviços"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Crucible", ["Revisão de código"], "https://www.atlassian.com/software/crucible", [2], "Privado", ["Qualquer"], "Google", "Paga", ["Não informado"], ["Web"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Gerrit", ["Revisão de código"], "https://www.gerritcodereview.com/", [2], "Open Source", ["Qualquer"], "Comunidade", "Gratis", ["Jenkins"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Google PageSpeed", ["Qualidade e performance"], "https://developers.google.com/speed/pagespeed/", [2], "Privado", ["Qualquer"], "Atlassian", "Paga", ["SVN", "Git", "Mercurial", "Perforce", "Bitbucket"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Gatling", ["Qualidade e performance"], "http://gatling.io/", [2], "Privado", ["Qualquer"], "Atlassian", "Paga", ["Jira", "Bamboo", "Hipchat", "Bitbucket"], ["Todos"], ["Qualquer"]));
  ferramentas.push(new ferramenta("Pingdom", ["Qualidade e performance"], "https://www.pingdom.com/", [2, 5], "Privado", ["Indiferente"], "Microsoft", "Gratis", ["Jenkins"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Zabbix", ["Qualidade e performance"], "http://www.zabbix.com/", [2, 5], "Privado", ["Indiferente"], "Slack", "Gratis", ["Chef", "Foreman", "Jenkins", "Capistrano", "Eclipse", "Trello", "Pingdom"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("JMeter", ["Qualidade e performance"], "http://jmeter.apache.org/", [2], "Privado", ["Indiferente"], "CA Tecnologies", "Paga", ["Jenkins", "Chef"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Facebook", ["Comunicação e Feedback"], "https://www.facebook.com/", [2], "Open Source", ["Indiferente"], "Facebook", "Gratis", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Optimizely", ["Comunicação e Feedback"], "https://www.optimizely.com/", [2], "Privado", ["Indiferente"], "Optimizely", "Paga", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Qlikview", ["Comunicação e Feedback"], "http://www.qlik.com/", [2], "Open Source", ["Indiferente"], "Qilk", "Paga", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Sitecatalyst", ["Comunicação e Feedback"], "http://www.adobe.com/uk/marketing-cloud.html", [2], "Privado", ["Indiferente"], "Atlassian", "Gratis", ["Chef", "Fisheye", "Jenkins", "Bitbucket", "Capistrano"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Intercom", ["Comunicação e Feedback"], "https://www.intercom.io/", [2], "Privado", ["Indiferente"], "Adobe", "Paga", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Flurry", ["Comunicação e Feedback"], "https://developer.yahoo.com/", [2], "Privado", ["Indiferente"], "Intecom", "Paga", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Pagerduty", ["Comunicação e Feedback"], "https://www.pagerduty.com/", [5], "Privado", ["Indiferente"], "Yahoo", "Paga", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Google Analytics", ["Comunicação e Feedback"], "https://analytics.google.com/", [2], "Privado", ["Indiferente"], "Pagerduty", "Paga", ["Jenkins"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Outlook", ["Comunicação e Feedback"], "https://products.office.com/en-us/outlook/", [2], "Privado", ["Indiferente"], "Google", "Gratis", ["Jenkins"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("SharePoint", ["Comunicação e Feedback"], "https://products.office.com/en-us/sharepoint/", [2], "Privado", ["Indiferente"], "Microsoft", "Gratis", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Lync", ["Comunicação e Feedback"], "https://products.office.com/en-us/skype-for-business/", [2], "Privado", ["Indiferente"], "Microsoft", "Paga", ["Eclipse"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Hipchat", ["Comunicação e Feedback"], "https://hipchat.com/", [2], "Privado", ["Indiferente"], "Microsoft", "Paga", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("XMPP", ["Comunicação e Feedback"], "https://xmpp.org/", [2], "Privado", ["Indiferente"], "", "Gratis", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Webex", ["Comunicação e Feedback"], "https://www.webex.com/", [2], "Privado", ["Indiferente"], "Cisco", "Paga", ["Não informado"], ["Indiferente"], ["Indiferente"]));
  ferramentas.push(new ferramenta("Ab", ["Qualidade e performance"], "http://httpd.apache.org/docs/2.2/programs/ab.html", [2], "Privado", ["Qualquer"], "Comunidade", "Gratis", ["Não informado"], ["Web", "Microsserviços"], ["Qualquer"]));

  var links = [];

  ferramentas.forEach(function (tool) {

    tool.integracao.forEach(function (int) {
      if ($.inArray({source: tool.nome, target: int}, links) == -1 && $.inArray({source: int, target: tool.nome}, links) == -1 && int != 'Não informado' && int != "Indiferente") {
        links.push({source: tool.nome, target: int});
      }
    });
  });


  var nodes = {};

  // Compute the distinct nodes from the links.
  links.forEach(function (link) {
    link.source = nodes[link.source] || (nodes[link.source] = { name: link.source });
    link.target = nodes[link.target] || (nodes[link.target] = { name: link.target });
  });

  var width = 1250,
    height = 1000;

  var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(300) //Tamanho da aresta
    .charge(-300)
    .on("tick", tick)
    .start();

  var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
    .data(["suit", "licensing", "resolved"])
    .enter().append("marker")
    .attr("id", function (d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5");

  var path = svg.append("g").selectAll("path")
    .data(force.links())
    .enter().append("path")
    .attr("class", function (d) { return "link " + d.type; })
    .attr("marker-end", function (d) { return "url(#" + d.type + ")"; })
    .attr("id", function (d) { return d.name; })
    .attr();

  var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
    .enter().append("circle")
    .attr("r", 10)// raio do nó
    .attr("id", function (d) {
      return d.name;
    })
    .call(force.drag);

  var text = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("x", 8)
    .attr("y", ".31em")
    .text(function (d) { return d.name; });

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    path.attr("link", destaca);
    circle.attr("transform", transform)
      .on("mouseover", function () {
        d3.select(this).transition()
          .duration(50)
          .style("fill", "red");
        var s = d3.select(this).attr("id");
        links.forEach(function (link) {
          var ss = '';
          if (link.source.name == s) {
            d3.select("#" + link.target.name).transition()
              .duration(50)
              .style("fill", "red");
          } else if (link.target.name == s) {
            d3.select("#" + link.source.name).transition()
              .duration(50)
              .style("fill", "red");
          }
        })
      }).on("mouseout", function () {
        d3.selectAll("circle").transition()
          .duration(50)
          .style("fill", "#ccc").style("opacity", "1.0");
      }).on("dblclick", function () {
        d3.selectAll("path").transition()
          .duration(50)
          .style("opacity", "0.1");
      }).on("click", function () {
        d3.selectAll("path").transition()
          .duration(50)
          .style("opacity", "1.0");
      });
    text.attr("transform", transform);
  }

  function linkArc(d) {
    var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  }

  function transform(d) {
    return "translate(" + d.x + "," + d.y + ")";
  }

  function destaca(d) {
    return d.source.name;
  }
});

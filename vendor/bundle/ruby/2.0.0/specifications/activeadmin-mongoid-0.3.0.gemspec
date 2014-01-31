# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "activeadmin-mongoid"
  s.version = "0.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Elia Schito"]
  s.date = "2013-10-05"
  s.description = "ActiveAdmin hacks to support Mongoid (some ActiveAdmin features are disabled)"
  s.email = ["elia@schito.me"]
  s.homepage = ""
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.3"
  s.summary = "ActiveAdmin hacks to support Mongoid"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<mongoid>, ["< 5.0", "> 3.0"])
      s.add_runtime_dependency(%q<activeadmin>, ["~> 0.6"])
      s.add_runtime_dependency(%q<jquery-rails>, ["< 3.0"])
      s.add_runtime_dependency(%q<sass-rails>, ["< 5.0", ">= 3.1.4"])
      s.add_runtime_dependency(%q<meta_search>, ["~> 1.1.3"])
      s.add_development_dependency(%q<rspec-rails>, ["~> 2.7"])
    else
      s.add_dependency(%q<mongoid>, ["< 5.0", "> 3.0"])
      s.add_dependency(%q<activeadmin>, ["~> 0.6"])
      s.add_dependency(%q<jquery-rails>, ["< 3.0"])
      s.add_dependency(%q<sass-rails>, ["< 5.0", ">= 3.1.4"])
      s.add_dependency(%q<meta_search>, ["~> 1.1.3"])
      s.add_dependency(%q<rspec-rails>, ["~> 2.7"])
    end
  else
    s.add_dependency(%q<mongoid>, ["< 5.0", "> 3.0"])
    s.add_dependency(%q<activeadmin>, ["~> 0.6"])
    s.add_dependency(%q<jquery-rails>, ["< 3.0"])
    s.add_dependency(%q<sass-rails>, ["< 5.0", ">= 3.1.4"])
    s.add_dependency(%q<meta_search>, ["~> 1.1.3"])
    s.add_dependency(%q<rspec-rails>, ["~> 2.7"])
  end
end

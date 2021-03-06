# -*- encoding: utf-8 -*-
# stub: after_party 1.11.2 ruby lib

Gem::Specification.new do |s|
  s.name = "after_party".freeze
  s.version = "1.11.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Steve Mitchell".freeze]
  s.date = "2019-03-25"
  s.description = "Automated post-deploy tasks for Ruby/Rails. Your deployment is the party. This is the after party".freeze
  s.email = "thestevemitchell@gmail.com".freeze
  s.homepage = "http://github.com/theSteveMitchell/after_party".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.6".freeze
  s.summary = "A rails engine that manages deploy tasks and versions using activeRecord or mongoid".freeze

  s.installed_by_version = "3.1.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<activerecord>.freeze, [">= 0"])
    s.add_development_dependency(%q<factory_bot>.freeze, [">= 0"])
    s.add_development_dependency(%q<generator_spec>.freeze, [">= 0"])
    s.add_development_dependency(%q<mongoid>.freeze, [">= 0"])
    s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_development_dependency(%q<rspec-rails>.freeze, ["~> 3.4"])
    s.add_development_dependency(%q<rubocop>.freeze, [">= 0"])
    s.add_development_dependency(%q<sqlite3>.freeze, ["~> 1.3.6"])
  else
    s.add_dependency(%q<activerecord>.freeze, [">= 0"])
    s.add_dependency(%q<factory_bot>.freeze, [">= 0"])
    s.add_dependency(%q<generator_spec>.freeze, [">= 0"])
    s.add_dependency(%q<mongoid>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<rspec-rails>.freeze, ["~> 3.4"])
    s.add_dependency(%q<rubocop>.freeze, [">= 0"])
    s.add_dependency(%q<sqlite3>.freeze, ["~> 1.3.6"])
  end
end

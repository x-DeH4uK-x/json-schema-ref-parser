'use strict';

describe('Object sources (instead of file paths)', function() {
  it('should dereference an object that references external files', function(done) {
    var parser = new SwaggerParser();
    parser
      .dereference(helper.cloneDeep(helper.parsed.objectSource.api))
      .then(function(schema) {
        expect(schema).to.equal(parser.api);
        expect(schema).to.deep.equal(helper.dereferenced.objectSource);

        // The schema path should be blank, and all other paths should be relative (not absolute)
        var expectedPaths = [
          '',
          path.rel('specs/object-source/definitions/definitions.json'),
          path.rel('specs/object-source/definitions/name.yaml'),
          path.rel('specs/object-source/definitions/required-string.yaml')
        ];
        expect(parser.$refs.paths()).to.have.same.members(expectedPaths);
        expect(parser.$refs.values()).to.have.keys(expectedPaths);

        // Reference equality
        expect(schema.paths['/people/{name}'].get.responses['200'].schema)
          .to.equal(schema.definitions.name);
        expect(schema.definitions.requiredString)
          .to.equal(schema.definitions.name.properties.first)
          .to.equal(schema.definitions.name.properties.last)
          .to.equal(schema.paths['/people/{name}'].get.responses['200'].schema.properties.first)
          .to.equal(schema.paths['/people/{name}'].get.responses['200'].schema.properties.last);

        done();
      })
      .catch(helper.shouldNotGetCalled(done));
  });

  it('should bundle an object that references external files', function(done) {
    var parser = new SwaggerParser();
    parser
      .bundle(helper.cloneDeep(helper.parsed.objectSource.api))
      .then(function(schema) {
        expect(schema).to.equal(parser.api);
        expect(schema).to.deep.equal(helper.bundled.objectSource);

        // The schema path should be blank, and all other paths should be relative (not absolute)
        var expectedPaths = [
          '',
          path.rel('specs/object-source/definitions/definitions.json'),
          path.rel('specs/object-source/definitions/name.yaml'),
          path.rel('specs/object-source/definitions/required-string.yaml')
        ];
        expect(parser.$refs.paths()).to.have.same.members(expectedPaths);
        expect(parser.$refs.values()).to.have.keys(expectedPaths);

        done();
      })
      .catch(helper.shouldNotGetCalled(done));
  });

  it('should validate an object that references external files', function(done) {
    var parser = new SwaggerParser();
    parser
      .dereference(helper.cloneDeep(helper.parsed.objectSource.api))
      .then(function(schema) {
        expect(schema).to.equal(parser.api);
        expect(schema).to.deep.equal(helper.dereferenced.objectSource);

        // The schema path should be blank, and all other paths should be relative (not absolute)
        var expectedPaths = [
          '',
          path.rel('specs/object-source/definitions/definitions.json'),
          path.rel('specs/object-source/definitions/name.yaml'),
          path.rel('specs/object-source/definitions/required-string.yaml')
        ];
        expect(parser.$refs.paths()).to.have.same.members(expectedPaths);
        expect(parser.$refs.values()).to.have.keys(expectedPaths);

        // Reference equality
        expect(schema.paths['/people/{name}'].get.responses['200'].schema)
          .to.equal(schema.definitions.name);
        expect(schema.definitions.requiredString)
          .to.equal(schema.definitions.name.properties.first)
          .to.equal(schema.definitions.name.properties.last)
          .to.equal(schema.paths['/people/{name}'].get.responses['200'].schema.properties.first)
          .to.equal(schema.paths['/people/{name}'].get.responses['200'].schema.properties.last);

        done();
      })
      .catch(helper.shouldNotGetCalled(done));
  });
});

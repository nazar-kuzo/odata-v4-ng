import { ODataResponse } from '../../odata/odata-response/odata-response';
import { ODataQuery } from '../../odata/odata-query/odata-query';
import { ODataService } from '../../odata/odata-service/odata.service';
import { Component, OnInit } from '@angular/core';
import { ExampleData, SERVICE_ROOT } from '../example/example-data';
import { ExampleComponent } from '../example/example.component';

export const EXECUTE_GET = `example.odataQuery.get().subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
);`;

@Component({
  selector: 'ov4-basic-read',
  templateUrl: '../example/example.component.html',
  styleUrls: ['./basic-read.component.less']
})
export class BasicReadComponent extends ExampleComponent implements OnInit {
  constructor(public odataService: ODataService) { super(odataService); }

  ngOnInit() {
    this.examples = [];
    // SERVICE DOCUMENT
    let example: ExampleData = new ExampleData();
    this.examples.push(example);
    example.title = 'Get service document';
    example.query = SERVICE_ROOT;
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SERVICE METADATA
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get service metadata';
    example.query = SERVICE_ROOT + '/$metadata';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .metadata();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .metadata();
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // ENTITY SET
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entity set';
    example.query = SERVICE_ROOT + '/People';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // ENTITY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entity';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'russellwhyte\\\'');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // PROPERTY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get property';
    example.query = SERVICE_ROOT + '/Airports(\'KSFO\')/Name';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .entityKey('\'KSFO\'')
      .property('Name');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .entityKey('\\\'KSFO\\\'')
    .property('Name');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // COMPLEX TYPE PROPERTY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get complex type property';
    example.query = SERVICE_ROOT + '/Airports(\'KSFO\')/Location/Address';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .entityKey('\'KSFO\'')
      .property('Location/Address');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .entityKey('\\\'KSFO\\\'')
    .property('Location/Address');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // PROPERTY RAW VALUE
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get property raw value';
    example.query = SERVICE_ROOT + '/Airports(\'KSFO\')/Name/$value';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .entityKey('\'KSFO\'')
      .property('Name')
      .value();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .entityKey('\\\'KSFO\\\'')
    .property('Name')
    .value();
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTER ENTITIES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get filtered entities';
    example.query = SERVICE_ROOT + '/People?$filter=FirstName eq \'Scott\'';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .filter('FirstName eq \'Scott\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .filter('FirstName eq \\\'Scott\\\'');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTER COMPLEX TYPES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get filtered complex types';
    example.query = SERVICE_ROOT + '/Airports?$filter=contains(Location/Address, \'San Francisco\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .filter('contains(Location/Address, \'San Francisco\')');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .filter('contains(Location/Address, \\\'San Francisco\\\')');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTER ENUM PROPERTIES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get filtered enum properties';
    example.query = SERVICE_ROOT + '/People?$filter=Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\\\'Female\\\'');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // EXPAND
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get expanded entities';
    example.query = SERVICE_ROOT + '/People?$expand=Trips';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .expand('Trips');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .expand('Trips');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTERED EXPAND
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get expanded entities with nested filter';
    example.query = SERVICE_ROOT + '/People?$expand=Trips($filter=Name eq \'Trip in US\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .expand('Trips($filter=Name eq \'Trip in US\')');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .expand('Trips($filter=Name eq \\\'Trip in US\\\')');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // ORDERBY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get ordered entities';
    example.query = SERVICE_ROOT + '/People(\'scottketchum\')/Trips?$orderby=EndsAt desc';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'scottketchum\'')
      .navigationProperty('Trips')
      .orderby('EndsAt desc');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'scottketchum\\\'')
    .navigationProperty('Trips')
    .orderby('EndsAt desc');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // TOP
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entities using top';
    example.query = SERVICE_ROOT + '/People?$top=2';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .top(2);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .top(2);
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SKIP
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entities using skip';
    example.query = SERVICE_ROOT + '/People?$skip=18';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .skip(18);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .skip(18);
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // COUNT
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entities count';
    example.query = SERVICE_ROOT + '/People?$count';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .count();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .count();
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // PROJECTED ENTITIES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get projected entities';
    example.query = SERVICE_ROOT + '/Airports?$select=Name, IcaoCode';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .select('Name, IcaoCode');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .select('Name, IcaoCode');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SEARCH
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entities matching search';
    example.query = SERVICE_ROOT + '/People?$search=Boise';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .search('Boise');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .search('Boise');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // UNBOUND FUNCTION
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Unbound function';
    example.query = SERVICE_ROOT + '/GetNearestAirport(lat = 33, lon = -118)';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .functionCall('GetNearestAirport(lat = 33, lon = -118)');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .functionCall('GetNearestAirport(lat = 33, lon = -118)');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // BOUND FUNCTION
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Bound function';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'')
      .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'russellwhyte\\\'')
    .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
${EXECUTE_GET}`;
    example.func = this.executeGet;
  }

  execute(example: ExampleData): void {
    if (example.func) {
      example.func(example, this.odataService);
    }
  }

  executeGet(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.get().subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeAllGet(): void {
    if (this.examples) {
      for (const example of this.examples) {
        this.executeGet(example, this.odataService);
      }
    }
  }

  executeCreateEntity(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.post({
      '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
      'UserName': 'teresa',
      'FirstName': 'Teresa',
      'LastName': 'Gilbert',
      'Gender': 'Female',
      'Emails': ['teresa@example.com', 'teresa@contoso.com'],
      'AddressInfo': [
        {
          'Address': '1 Suffolk Ln.',
          'City':
          {
            'CountryRegion': 'United States',
            'Name': 'Boise',
            'Region': 'ID'
          }
        }]
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
      );
  }

  executeDeleteEntity(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.delete().subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeDeleteEntityETag(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.delete('W/"08D15F3DD9A61539"').subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeUpdateEntity(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.patch({
      '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
      'Emails': ['Russell@example.com', 'Russell@contoso.com', 'newRussell@contoso.com']
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
      );
  }

  executeUpdateEntityETag(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.patch({
      '@odata.type': '#Microsoft.OData.SampleService.Models.TripPin.Person',
      'FirstName': 'CLYDE'
    }, 'W/"08D15F3DD9126D84"').subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
      );
  }

  executeCreateRelationship(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.post({
      '@odata.id': new ODataQuery(odataService, SERVICE_ROOT).entitySet('People').entityKey('\'vincentcalabrese\'').toString()
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
      );
  }

  executeChangeRelationship(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.put({
      '@odata.id': new ODataQuery(odataService, SERVICE_ROOT).entitySet('Airlines').entityKey('\'FM\'').toString()
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
      );
  }

  executeBoundAction(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.post({
      'userName': 'scottketchum',
      'tripId': 1001
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
      );
  }
}
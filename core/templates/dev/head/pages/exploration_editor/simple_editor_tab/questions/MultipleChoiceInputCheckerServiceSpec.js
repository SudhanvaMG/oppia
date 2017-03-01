// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit test for MultipleChoiceInputCheckerService.
 */

 describe('Multiple Choice Input Checker Service', function() {
   var multipleChoiceInputCheckerService;

   beforeEach(module('oppia'));

   beforeEach(inject(function($injector) {
     multipleChoiceInputCheckerService =
     $injector.get('MultipleChoiceInputCheckerService');
   }));

   it('Should return true if interaction data is compatible', function() {
     expect(multipleChoiceInputCheckerService.isValid()).toBe(true);
   });

   it('Should return flase if interaction data is not compatible', function() {
     expect(multipleChoiceInputCheckerService.isValid()).toBe(false);
   });
 });

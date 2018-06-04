/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* Tests are within the $() function to ensure they don't run until 
 * the DOM is ready, since some of these tests may require DOM elements.
 */
$(function() {
    /* This is the RSS Feeds test suite */
    describe('RSS Feeds', function() {
        /* This test makes sure that allFeeds variable has been defined 
         * and that it is not empty */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*This function loops through the object and ensures if the object 
        * has the given property and is not empty.
        */
        function test_object_has_property(object, property,index) {
            it('allFeeds['+index+'] should have ' + property +' property', function() {
                expect(object[property]).toBeDefined();
                expect(object[property]).not.toBe('');
            });
        }

        /* This test loops through each feed in the allFeeds object and 
         * ensures it has a URL defined and that the URL is not empty.
         */
        for(var x = 0; x < allFeeds.length; x++) {
            test_object_has_property(allFeeds[x], 'url', x);
        }

        /* This test loops through each feed in the allFeeds object and 
         * ensures it has a name defined and that the name is not empty.
         */
        for(var x = 0; x < allFeeds.length; x++) {
            test_object_has_property(allFeeds[x], 'name', x);
        }
    });


    /* This is the menu test suite */
    describe('The menu', function() {

        /* This test ensures the menu element is hidden by default by
         * analyzing if the body tag  has the CSS class menu-hidden
         */
        it('the menu element should be hidden by default', function(){
            expect($("body")).toHaveClass('menu-hidden');
        });

         /* This test ensures the menu changes visibility when the menu 
          * icon is clicked.
          */
        it('the menu element should change visibility when the menu icon is clicked', function(){

            $('.menu-icon-link').trigger('click');
            expect($("body")).not.toHaveClass('menu-hidden');

            $('.menu-icon-link').trigger('click');
            expect($("body")).toHaveClass('menu-hidden');
        });

    });

    /* This is "Initial Entries" test suite */
    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
        });
    
        it('should be at least a single .entry element within the .feed container',function(done){
            expect($('.feed')).toContainElement('.entry');
            done();
        })

    });

    /* This is "New Feed Selection"  test suite */
    describe('New Feed Selection', function() {

        /* This test ensures when a new feed is loaded by the loadFeed 
         * function that the content actually changes.
         */
        var firstFeed, secondFeed;

        beforeEach((done)=> {
            loadFeed(0, function() {
                firstFeed = $('.feed').html();
                loadFeed(1, function() {
                    secondFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('when loadFeed function is called the content should change',function(done){          

            expect(firstFeed).not.toEqual(secondFeed);
            done();

        })

    });

}());

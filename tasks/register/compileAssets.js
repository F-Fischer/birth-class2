module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'bower',
		'jst:dev',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};

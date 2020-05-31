
    prepublish: Run BEFORE the package is packed and published, as well as on local npm install without any arguments. (See below)
    prepare: Run both BEFORE the package is packed and published, on local npm install without any arguments, and when installing git dependencies (See below). This is run AFTER prepublish, but BEFORE prepublishOnly.
    prepublishOnly: Run BEFORE the package is prepared and packed, ONLY on npm publish. (See below.)
    prepack: run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git dependencies)
    postpack: Run AFTER the tarball has been generated and moved to its final destination.
    publish, postpublish: Run AFTER the package is published.
    preinstall: Run BEFORE the package is installed
    install, postinstall: Run AFTER the package is installed.
    preuninstall, uninstall: Run BEFORE the package is uninstalled.
    postuninstall: Run AFTER the package is uninstalled.
    preversion: Run BEFORE bumping the package version.
    version: Run AFTER bumping the package version, but BEFORE commit.
    postversion: Run AFTER bumping the package version, and AFTER commit.
    pretest, test, posttest: Run by the npm test command.
    prestop, stop, poststop: Run by the npm stop command.
    prestart, start, poststart: Run by the npm start command.
    prerestart, restart, postrestart: Run by the npm restart command. Note: npm restart will run the stop and start scripts if no restart script is provided.
    preshrinkwrap, shrinkwrap, postshrinkwrap: Run by the npm shrinkwrap command.

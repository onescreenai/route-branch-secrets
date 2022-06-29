import core from '@actions/core';
import github from '@actions/github';

try {
    const secrets = core
        .getInput('secrets', {required: true})
        .toUpperCase()
        .split(',')
        .map(value => value.trim());

    if(github.context.eventName === 'pull_request') {
        throw new Error('Pull requests not supported');
    }

    const branch = process.env.GITHUB_REF_NAME;

    core.info(`Branch ${branch}`);

    for (const secret of secrets) {
        core.exportVariable(
            `${secret}_KEY`,
            `${branch.toUpperCase()}_${secret}`
        );
    }
} catch (error) {
    core.setFailed(error);
}
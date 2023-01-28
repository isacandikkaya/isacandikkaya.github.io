import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/isacandikkaya/repos', {
            headers: {
                'Authorization': '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'
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};
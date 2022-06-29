# Route secrets based on branch

Use Example:
```yaml
    - uses: onescreenai/route-branch-secrets
      with:
        secrets: SECRET_ONE, SECRET_TWO
```

Access Example:
```yaml
    env:
        ACTUAL_SECRET_ONE: ${{ secrets[env.SECRET_ONE_KEY] }}
        ACTUAL_SECRET_TWO: ${{ secrets[env.SECRET_TWO_KEY] }}
```
